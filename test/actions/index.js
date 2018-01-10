import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/types';
import { expect } from 'chai';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

describe('Action incrementCount' , () => {
  it('creates a INCREMENT_COUNT action', (done) => {
    const store = mockStore({ myState: {count: 0, fireabaseAvailableFeatures: [] } });

    const expectedActions = [
      {type: types.INCREMENT_COUNT, payload: 'payload'}
    ]
    store.dispatch(actions.incrementCount('payload')).then(() => {
      expect(store.getActions()).to.eql(expectedActions);
      done();
    }, (err) => {
      done(err);
    });
  });
});
