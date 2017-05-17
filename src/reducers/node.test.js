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
        parentId: null,
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
        parentId: null,
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
    //
  });

  it('should remove another node', () => {
    //
  });

  it('should remove node with children', () => {
    //
  });

  it('should remove root node', () => {
    //
  });
});
