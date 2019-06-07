var twiliochat = function() {
  var tc = {};

  tc.joinGeneralChannel = function() {
    console.log('Attempting to join "general" chat channel...');
    if (!tc.generalChannel) {
      // If it doesn't exist, let's create it
      tc.messagingClient
        .createChannel({
          uniqueName: GENERAL_CHANNEL_UNIQUE_NAME,
          friendlyName: GENERAL_CHANNEL_NAME
        })
        .then(function(channel) {
          console.log("Created general channel");
          tc.generalChannel = channel;
          tc.loadChannelList(tc.joinGeneralChannel);
        });
    } else {
      console.log("Found general channel:");
      setupChannel(tc.generalChannel);
    }
  };

  tc.loadChannelList = function(handler) {
    if (tc.messagingClient === undefined) {
      console.log("Client is not initialized");
      return;
    }

    tc.messagingClient.getPublicChannelDescriptors().then(function(channels) {
      tc.channelArray = tc.sortChannelsByName(channels.items);
      $channelList.text("");
      tc.channelArray.forEach(addChannel);
      if (typeof handler === "function") {
        handler();
      }
    });
  };

  tc.handleNewChannelInputKeypress = function(event) {
    if (event.keyCode === 13) {
      tc.messagingClient
        .createChannel({
          friendlyName: $newChannelInput.val()
        })
        .then(hideAddChannelInput);

      $(this).val("");
      event.preventDefault();
    }
  };

  function selectChannel(event) {
    var target = $(event.target);
    var channelSid = target.data().sid;
    var selectedChannel = tc.channelArray.filter(function(channel) {
      return channel.sid === channelSid;
    })[0];
    if (selectedChannel === tc.currentChannel) {
      return;
    }
    setupChannel(selectedChannel);
  }

  function deleteCurrentChannel() {
    if (!tc.currentChannel) {
      return;
    }

    if (tc.currentChannel.sid === tc.generalChannel.sid) {
      alert("You cannot delete the general channel");
      return;
    }

    tc.currentChannel.delete().then(function(channel) {
      console.log("channel: " + channel.friendlyName + " deleted");
      setupChannel(tc.generalChannel);
    });
  }

  function initChannelEvents() {
    console.log(tc.currentChannel.friendlyName + " ready.");
    tc.currentChannel.on("messageAdded", tc.addMessageToList);
    tc.currentChannel.on("typingStarted", showTypingStarted);
    tc.currentChannel.on("typingEnded", hideTypingStarted);
    tc.currentChannel.on("memberJoined", notifyMemberJoined);
    tc.currentChannel.on("memberLeft", notifyMemberLeft);
    $inputText.prop("disabled", false).focus();
  }

  function connectMessagingClient(token) {
    // Initialize the Chat messaging client
    Twilio.Chat.Client.create(token).then(function(client) {
      tc.messagingClient = client;
      updateConnectedUI();
      tc.loadChannelList(tc.joinGeneralChannel);
      tc.messagingClient.on("channelAdded", $.throttle(tc.loadChannelList));
      tc.messagingClient.on("channelRemoved", $.throttle(tc.loadChannelList));
      tc.messagingClient.on("tokenExpired", refreshToken);
    });
  }

  function fetchAccessToken(username, handler) {
    $.post("/token", { identity: username, device: "browser" }, null, "json")
      .done(function(response) {
        handler(response.token);
      })
      .fail(function(error) {
        console.log("Failed to fetch the Access Token with error: " + error);
      });
  }

  function connectMessagingClient(token) {
    // Initialize the Chat messaging client
    Twilio.Chat.Client.create(token).then(function(client) {
      tc.messagingClient = client;
      updateConnectedUI();
      tc.loadChannelList(tc.joinGeneralChannel);
      tc.messagingClient.on("channelAdded", $.throttle(tc.loadChannelList));
      tc.messagingClient.on("channelRemoved", $.throttle(tc.loadChannelList));
      tc.messagingClient.on("tokenExpired", refreshToken);
    });
  }

  return tc;
};
