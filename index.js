const { Plugin } = require("powercord/entities");
const { messages } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const { channels } = require("powercord/webpack");

module.exports = class i extends Plugin {
  async startPlugin() {
    inject("i-i", messages, 'sendMessage', (args) => {

        const channel = channels.getChannelId();
        if (channel === "911357751547023391") { // fuck everything why isnt channel_id a property on args[1]
            if (!args[1].content.toLowerCase().startsWith("i")) {
                args[1].content = `I forgot to add an I, but ${args[1].content}`;
            }
            return args;
        }
    }, true);
  }

  pluginWillUnload() {
    uninject("i-i");
  }
};