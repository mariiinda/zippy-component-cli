const capitalize = ([firstLetter, ...rest]) =>
  [firstLetter.toUpperCase(), ...rest].join("");

module.exports = { capitalize };
