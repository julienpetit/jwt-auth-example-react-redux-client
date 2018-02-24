// The module index is responsible for maintaining its public API.
// This is the exposed surface where modules can interface with each other.
import * as constants from './constants';
import reducer from './reducer';
import * as actions from './actions';

export default { constants, reducer, actions };
