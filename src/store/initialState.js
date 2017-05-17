const state = {
  1: {
    id: 1,
    title: 'Element 1',
    parentId: null,
    children: [
      2, 3, 4
    ]
  },
  2: {
    id: 2,
    title: 'Element 2',
    parentId: 1,
    children: []
  },
  3: {
    id: 3,
    title: 'Element 3',
    parentId: 1,
    children: [
      5, 6
    ]
  },
  4: {
    id: 4,
    title: 'Element 4',
    parentId: 1,
    children: []
  },
  5: {
    id: 5,
    title: 'Element 5',
    parentId: 3,
    children: []
  },
  6: {
    id: 6,
    title: 'Element 6',
    parentId: 3,
    children: []
  }
};

export default state;
