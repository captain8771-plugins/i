const { Plugin } = require("powercord/entities");
const { messages } = require('powercord/webpack');
const { inject, uninject } = require("powercord/injector");
const { channels } = require("powercord/webpack");
const chandlers = { // trol
  "911357751547023391": "i",
  "929774476713938964": "a",
  "897538868230889483": "\\:thonk\\:",
  "934547364797120614": "h",
  "934903182797176882": "b",
  "935759398310129684": "e"
}

// trol
const convert_msg_to_chandler_msg_wow_this_function_name_is_ridiculous = (msg, chandler_id) => {
  msg = msg.toString()
  switch (chandler_id.toString()) {
    case "911357751547023391": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ?  `I forgot to add an I, but ${msg}` : msg
    }
    case "929774476713938964": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ?  `am stupid and forgot the 'a' at the start of the message, anyways ${msg}` : msg
    }
    case "897538868230889483": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ? `\\:thonk\\: i forgot to add the \\:thonk\\:, anyways ${msg}` : msg
    }
    case "934547364797120614": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ? `hello i forgot the 'h', anyways ${msg}` : msg
    }
    case "934903182797176882": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ? `bruh i forgot the 'b', anyways ${msg}` : msg
    }
    case "935759398310129684": {
      return !msg.toLowerCase().startsWith(chandlers[chandler_id.toString()]) ? `electro pog, anyways ${msg}` : msg
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
