import node from './node';
import { addChild, remove } from '../actions/actions';
import initialState from '../store/initialState';

describe('Node reducer', () => {
  it('should return the empty initial state', () => {
    expect(node(undefined, {})).toEqual({});
  });

  it('should return the predefined state state', () => {
    expect(node(initialState, {})).toEqual(initialState);
  });

  it('should add node as a root node', () => {
    expect(node({
      //
    }, addChild())).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: []
      }
    })
  });

  it('should add node as a child of other node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        children: []
      }
    }, addChild(1))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2, 3
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
        children: []
      }
    })
  });

  it('should remove node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        children: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: []
      }
    })
  });

  it('should remove node with children', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        children: [
          3
        ]
      },
      3: {
        id: 3,
        title: 'Element 3',
        parentId: 2,
        children: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: []
      }
    })
  });

  it('should remove another node with children', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        children: [
          3, 4
        ]
      },
      3: {
        id: 3,
        title: 'Element 3',
        parentId: 2,
        children: [
          5, 6
        ]
      },
      4: {
        id: 4,
        title: 'Element 4',
        parentId: 2,
        children: []
      },
      5: {
        id: 5,
        title: 'Element 5',
        parentId: 3,
        children: [
          7
        ]
      },
      6: {
        id: 6,
        title: 'Element 6',
        parentId: 3,
        children: []
      },
      7: {
        id: 7,
        title: 'Element 7',
        parentId: 5,
        children: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: []
      }
    })
  });

  it('should remove root node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        children: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        children: []
      }
    }, remove(1))).toEqual({})
  });
});
