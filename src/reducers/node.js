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

      let parentItem = {};
      if (action.id) {
        parentItem = {
          [action.id]: Object.assign({}, state[action.id], {
            children: [
              ...state[action.id].children,
              createdId
            ]
          })
        }
      }

      return Object.assign({}, state, { [createdId]: childItem }, parentItem);

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
