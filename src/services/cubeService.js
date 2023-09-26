const uniqid = require('uniqid');

const cubes = [
  // {
  //   id: '8ewc9vkln0rrvzf',
  //   name: 'cube1',
  //   description: 'asd',
  //   imageUrl: 'https://images.pexels.com/photos/1340185/pexels-photo-1340185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   difficultyLevel: 1
  // },
  // {
  //   id: '8ewc9vkln0rs8z8',
  //   name: 'cube2',
  //   description: 'wqe',
  //   imageUrl: 'https://images.pexels.com/photos/1340185/pexels-photo-1340185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   difficultyLevel: 6
  // }
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  }

  cubes.push(newCube);
}

exports.getAll = () => {
  return [...cubes];
};