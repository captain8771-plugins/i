const { Plugin } = require("powercord/entities");
const { messages } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const { channels } = require("powercord/webpack");

// trol
const convert_msg_to_chandler_msg_wow_this_function_name_is_ridiculous = (msg, chandler_id) => {
  switch (chandler_id.toString()) {
    case "911357751547023391": {
      return `I forgot to add an I, but ${msg}`
    }
    case "929774476713938964": {
      return `am stupid and forgot the 'a' at the start of the message, anyways ${msg}`
    }
    case "897538868230889483": {
      return `\\:thonk\\: i forgot to add the \\:thonk\\:, anyways ${msg}`
    }
    default: {
      return msg
    }
  }
}
module.exports = class i extends Plugin {
  async startPlugin() {
    inject("i-i", messages, 'sendMessage', (args) => {

        const channel = channels.getChannelId();
        args[1].content = convert_msg_to_chandler_msg_wow_this_function_name_is_ridiculous(args[1].content, channel.toString())
        return args
    }, true);
  }

  pluginWillUnload() {
    uninject("i-i");
  }
};