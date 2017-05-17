const lastId = state => Math.max.apply(null, [
  ...Object.keys(state),
  0
]);

const addChild = (state, parentId) => {
  const createdId = lastId(state) + 1;

  const childNode = {
    id: createdId,
    title: `Element ${createdId}`,
    parentId: parentId,
    nodes: []
  };

  let parentNode = {};
  if (parentId) {
    parentNode = {
      [parentId]: Object.assign({}, state[parentId], {
        nodes: [
          ...state[parentId].nodes,
          createdId
        ]
      })
    }
  }

  return Object.assign({}, state, { [createdId]: childNode }, parentNode);
}

const remove = (state, idToRemove) => {
  const clearedState = state[idToRemove].nodes.reduce((clearedState, childId) => {
    return remove(clearedState, childId);
  }, state);

  const parentId = clearedState[idToRemove].parentId;
  let parentNode = {};
  if (parentId) {
    parentNode = {
      [parentId]: Object.assign({}, clearedState[parentId], {
        nodes: parentId ? clearedState[parentId].nodes.filter(item => item !== idToRemove) : []
      })
    };
  }

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

export default node;
