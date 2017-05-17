const node = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHILD':
      return addChild(state, action.id)

    case 'REMOVE':
      return remove(state, action.id);

    default:
      return state;
  }
};

const addChild = (state, parentId) => {
  const createdId = lastId(state) + 1;

  const childNode = {
    id: createdId,
    title: `Element ${createdId}`,
    parentId: parentId,
    children: []
  };

  let parentNode = {};
  if (parentId) {
    parentNode = {
      [parentId]: Object.assign({}, state[parentId], {
        children: [
          ...state[parentId].children,
          createdId
        ]
      })
    }
  }

  return Object.assign({}, state, { [createdId]: childNode }, parentNode);
}

const remove = (state, idToRemove) => {
  const clearedState = state[idToRemove].children.reduce((clearedState, childId) => {
    clearedState = remove(clearedState, childId);
    return clearedState;
  }, state);

  const parentId = clearedState[idToRemove].parentId;
  const parentNode = {
    [parentId]: Object.assign({}, clearedState[parentId], {
      children: parentId ? clearedState[parentId].children.filter(item => item !== idToRemove) : []
    })
  };

  return Object.assign(
    {},
    Object.keys(clearedState)
      .filter(id => parseInt(id, 10) !== idToRemove)
      .reduce((filteredState, id) => {
        filteredState[id] = clearedState[id];
        return filteredState;
      }, {}),
    parentNode
  );
}

const lastId = state => Math.max.apply(null, [
  ...Object.keys(state),
  0
]);

export default node;
