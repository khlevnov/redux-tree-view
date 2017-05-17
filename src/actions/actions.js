export const addChild = id => ({
  type: 'ADD_CHILD',
  id
});

export const remove = id => ({
  type: 'REMOVE',
  id
});

export const rename = (id, text) => ({
  type: 'RENAME',
  id,
  text
});
