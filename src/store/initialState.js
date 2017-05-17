const state = [
  {
    id: 1,
    title: 'Element 1',
    parentId: null,
    children: [
      2, 3, 4
    ]
  },
  {
    id: 2,
    title: 'Element 2',
    parentId: 1,
    children: []
  },
  {
    id: 3,
    title: 'Element 3',
    parentId: 1,
    children: [
      5, 6
    ]
  },
  {
    id: 4,
    title: 'Element 4',
    parentId: 1,
    children: []
  },
  {
    id: 5,
    title: 'Element 5',
    parentId: 3,
    children: []
  },
  {
    id: 6,
    title: 'Element 6',
    parentId: 3,
    children: []
  },
];

export default state;
