export const addChild = id => ({
  type: 'ADD_CHILD',
  id: id ? id : 1
});

export const remove = id => ({
  type: 'REMOVE',
  id
});
