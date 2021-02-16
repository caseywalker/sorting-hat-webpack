const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortingsHat = houses[Math.floor(Math.random() * houses.length)];
  return sortingsHat;
};

export default sortingHat;
