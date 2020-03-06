// console.log(module);

exports.getDate = function() {
  const optionsDate = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const today = new Date();
  return today.toLocaleDateString('en-GB', optionsDate);
};

exports.getDay = function() {
  const optionsDate = {
    weekday: 'long'
  };

  const today = new Date();
  return today.toLocaleDateString('en-GB', optionsDate);
};
