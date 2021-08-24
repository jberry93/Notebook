'use strict';

new Vue({
  el: '#app',
  data: {
    ws: null, // websocket
    newMsg: '', // messages to be sent to server (main.go)
    chatContent: '', // list of chat messages
    email: null, // email used for grabbing avatar
    username: null, // our username
    joined: false // only true if email and username have been filled
  },
  // handle WebSocket on Vue instance creation:
  created: function() {
    var self = this;
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    this.ws.addEventListener('message', function(e) {
      var msg = JSON.parse(e.data);
      self.chatContent += '<div>'
        + '<img src="' + self.gravatarURL(msg.email) + '">' // avatar
        + msg.username + '</div>'
        + emojione.toImage(msg.message) + '<br>'; // Parse emojis

      var el = document.getElementById('chat-messages');
      el.scrollTop = el.scrollHeight; // auto-scroll to bottom
    });
  },
  // define functions for use in Vue instance:
  methods: {
    send: function() {
      if (this.newMsg != '') {
        this.ws.send(
          JSON.stringify({
            email: this.email,
            username: this.username,
            message: $('<p>').html(this.newMsg).text() // prevents injection attacks +1
          }),
          this.newMsg = '' // reset `newMsg`
        );
      }
    },
    join: function() {
      if (!this.email) {
        alert('You must enter an email!');
        return
      }
      if (!this.username) {
        alert('You must choose a username!');
        return
      }
      this.email = $('<p>').html(this.email).text();
      this.username = $('<p>').html(this.username).text();
      this.joined = true;
    },
    gravatarURL: function(email) {
      return 'http://www.gravatar.com/avatar/' + CryptoJS.MD5(email);
    }
  }
});
