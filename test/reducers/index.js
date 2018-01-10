import reducer from '../../src/reducers/myReducer';
import * as types from '../../src/actions/types';
import { expect } from 'chai';

describe('reducers', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.eql(
      {
        count: 0,
        fireabaseAvailableFeatures: []
      }
    );
  });

  it('should handle INCREMENT_COUNT', () => {
    expect(reducer({ /* Initial state*/
      count: 2,
      fireabaseAvailableFeatures: []
    }, { /* Action */
      type: types.INCREMENT_COUNT,
      payload: 'payload'
    })).to.eql(
      {
        count: 3,
        fireabaseAvailableFeatures: []
      }
    );
  });

});
