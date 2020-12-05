import chalk from "chalk";

const purge = () => console.log("");

const prefixes = {
  event: chalk.magenta("event") + " - ",
};

export default {
  event(message: string, ...params) {
    purge();
    console.log(prefixes.event + message, ...params);
  },
};
