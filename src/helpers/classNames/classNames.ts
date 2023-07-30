const classNames = (...args: (string | object)[]): string => {
  const classes = args.filter((el) => typeof el === "string");
  args
    .filter((el) => typeof el === "object")
    .forEach((el) => {
      Object.entries(el).forEach((cort) => {
        if (!!cort[1]) {
          classes.push(cort[0]);
        }
      });
    });

  return classes.join(" ");
};

export default classNames;
