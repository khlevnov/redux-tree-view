import { addChild, remove } from './actions';

describe('actions', () => {
  it('should create an action to add a root node', () => {
    expect(addChild()).toEqual({
      type: 'ADD_CHILD',
      id: 1
    });
  });

  it('should create an action to add a child', () => {
    expect(addChild(2)).toEqual({
      type: 'ADD_CHILD',
      id: 2
    });
  });

  it('should create an action to add an another child', () => {
    expect(addChild(45)).toEqual({
      type: 'ADD_CHILD',
      id: 45
    });
  });

  it('should create an action to remove a child', () => {
    expect(remove(26)).toEqual({
      type: 'REMOVE',
      id: 26
    });
  });

  it('should create an action to remove an another child', () => {
    expect(remove(12)).toEqual({
      type: 'REMOVE',
      id: 12
    });
  });
});
