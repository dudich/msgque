import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './kannel-new.routes';

export class KannelNewController {
  $http;
  socket;
  awesomeMessages = [];
  newMessage = '';

  /*@ngInject*/
  constructor($http, $scope, socket, $sce) {
    this.$http = $http;
    this.$sce = $sce;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('message');
    });
  }

  $onInit() {
    this.$http.get('/api/messages')
      .then(response => {
        this.awesomeMessages = response.data;
        this.socket.syncUpdates('message', this.awesomeMessages);
      });
  }

  saveKannel(url){
    this.status = url
  }

  addMessage() {
    if(this.newMessage) {
      this.$http.post('/api/messages', {
        name: this.newMessage
      });
      this.newMessage = '';
    }
  }

  deleteMessage(message) {
    this.$http.delete(`/api/messages/${message._id}`);
  }
}

export default angular.module('msgqueApp.kannel-new', [uiRouter])
  .config(routing)
  .component('kannel', {
    template: require('./kannel-new.pug'),
    controller: KannelNewController
  })
  .name;
