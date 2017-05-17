const node = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHILD':
      const createdId = lastId(state) + 1;

      const childItem = {
        id: createdId,
        title: `Element ${createdId}`,
        parentId: action.id,
        children: []
      };

      const stateWithChild = Object.assign({}, state, { [createdId]: childItem });

      if (!action.id) {
        return stateWithChild;
      }

      const parentItem = Object.assign({}, state[action.id], {
        children: [
          ...state[action.id].children,
          createdId
        ]
      });

      return Object.assign({}, stateWithChild, { [action.id]: parentItem });

    case 'REMOVE':
      return state;

    default:
      return state;
  }
};

const lastId = state => Math.max.apply(null, [
  ...Object.keys(state),
  0
]);

export default node;
