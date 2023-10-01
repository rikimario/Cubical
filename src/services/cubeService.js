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

exports.getAll = (search, from, to) => {
  let filterCubes = [...cubes];

  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (from) {
    filterCubes = filterCubes.filter((cube) =>
      cube.difficultyLevel >= Number(from));
  }

  if (to) {
    filterCubes = filterCubes.filter((cube) =>
      cube.difficultyLevel <= Number(to));
  }

  return filterCubes;
};

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};