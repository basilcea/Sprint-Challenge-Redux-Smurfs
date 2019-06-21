/*
  Be sure to import in all of the action types from `../actions`
*/
import * as types from "./actions/index";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this

*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH:
      return { ...state, fetchingSmurfs: true };
    case types.CREATE:
      return { ...state, addingSmurf: true };
    case types.DELETE:
      return { ...state, deletingSmurf: true };
    case types.UPDATE:
      return { ...state, updatingSmurf: true };
    case types.SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case types.SUCCESS:
      return {
        ...state,
        error: action.payload,
        fetchingSmurs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false
      };
    default:
      return state;
  }
};
export default rootReducer;
