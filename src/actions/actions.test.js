import { addChild, remove, rename } from '../actions/actions';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
};

global.localStorage = new LocalStorageMock;

describe('local storage', () => {
  it('should save state in local storage on creating node', () => {
    //
  });

  it('should save state in local storage on removing node', () => {
    //
  });

  it('should save state in local storage on renaming node', () => {
    //
  });
});

describe('actions', () => {
  it('should create an action to add a root node', () => {
    expect(addChild()).toEqual({
      type: 'ADD_CHILD',
      id: undefined
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

  it('should create an action to rename element', () => {
    expect(rename(2, 'Some text')).toEqual({
      type: 'RENAME',
      id: 2,
      text: 'Some text'
    });
  });
});
