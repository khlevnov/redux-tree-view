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
        nodes: []
      }
    })
  });

  it('should add node as a child of other node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: []
      }
    }, addChild(1))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2, 3
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: []
      },
      3: {
        id: 3,
        title: 'Element 3',
        parentId: 1,
        nodes: []
      }
    })
  });

  it('should remove node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: []
      }
    })
  });

  it('should remove node with nodes', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: [
          3
        ]
      },
      3: {
        id: 3,
        title: 'Element 3',
        parentId: 2,
        nodes: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: []
      }
    })
  });

  it('should remove another node with nodes', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: [
          3, 4
        ]
      },
      3: {
        id: 3,
        title: 'Element 3',
        parentId: 2,
        nodes: [
          5, 6
        ]
      },
      4: {
        id: 4,
        title: 'Element 4',
        parentId: 2,
        nodes: []
      },
      5: {
        id: 5,
        title: 'Element 5',
        parentId: 3,
        nodes: [
          7
        ]
      },
      6: {
        id: 6,
        title: 'Element 6',
        parentId: 3,
        nodes: []
      },
      7: {
        id: 7,
        title: 'Element 7',
        parentId: 5,
        nodes: []
      }
    }, remove(2))).toEqual({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: []
      }
    })
  });

  it('should remove root node', () => {
    expect(node({
      1: {
        id: 1,
        title: 'Element 1',
        parentId: undefined,
        nodes: [
          2
        ]
      },
      2: {
        id: 2,
        title: 'Element 2',
        parentId: 1,
        nodes: []
      }
    }, remove(1))).toEqual({})
  });
});
