const Accessory = require('./../models/accessory');


exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();

exports.getWithoutOwned = (accessoryIds) => {
  // $nin => NOT IN
  return Accessory.find({ _id: { $nin: accessoryIds } });
};