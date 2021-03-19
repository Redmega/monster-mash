import chalk from "chalk";

const purge = () => console.log("");

const prefixes = {
  event: chalk.magenta("event") + " - ",
  debug: chalk.blue("debug") + " - ",
};

export default {
  event(message: string, ...params) {
    purge();
    console.log(prefixes.event + message, ...params);
  },

  debug(message: string, ...params) {
    purge();
    console.log(prefixes.debug + message, ...params);
  },
};
