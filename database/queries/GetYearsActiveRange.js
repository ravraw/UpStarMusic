const Artist = require("../models/artist");

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () => {
  Artist.find({})
    .sort({ yearsActive: 1 })
    .then(users => {
      let min = users[0].yearsActive;
      let max = users[users.length - 1].yearsActive;
      return {
        min: min,
        max: max
      };
    });
};
