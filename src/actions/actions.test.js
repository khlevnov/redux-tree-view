import { addChild, remove } from './actions';

describe('Actions', () => {
  it('Create addChild action', () => {
    expect(addChild(2)).toEqual({
      type: 'ADD_CHILD',
      id: 2
    });
  });

  it('Create another addChild action', () => {
    expect(addChild(45)).toEqual({
      type: 'ADD_CHILD',
      id: 45
    });
  });

  it('Create remove action', () => {
    expect(remove(26)).toEqual({
      type: 'REMOVE',
      id: 26
    });
  });

  it('Create another remove action', () => {
    expect(remove(12)).toEqual({
      type: 'REMOVE',
      id: 12
    });
  });
});
