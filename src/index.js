export default function logger(customOptions = {}) {
  const defaultOptions = {
    log: console.log,
    timestamp: true,
    payload: true,
  };

  const options = Object.assign({}, defaultOptions, customOptions);

  // The two functions below are copied from
  // https://github.com/LogRocket/redux-logger/blob/master/src/helpers.js
  // and were slightly modified

  function pad(num, maxLength = 2) {
    return num.toString().length < maxLength
      ? '0'.repeat(maxLength - num.toString().length) + num
      : num;
  };

  function formatTime(time) {
    return pad(time.getHours())
      + ':'
      + pad(time.getMinutes())
      + ':'
      + pad(time.getSeconds())
      + '.'
      + pad(time.getMilliseconds(), 3);
  }

  return {
    middleware: (store) => (next) => (action) => {
      const { type: actionType, ...payload } = action;
      const args = [];

      if (options.timestamp) {
        args.push(
          formatTime(new Date())
        );
      }

      args.push(actionType);

      if (options.payload) {
        args.push(payload);
      }

      options.log(...args);

      return next(action);
    },
  };
}
