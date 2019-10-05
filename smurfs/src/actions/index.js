/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer

*/
import axios from 'axios';

export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE ='FAILURE';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const success = value => {
  return {
    type: SUCCESS,
    payload: value
  }
}
export const failure = value => {
  return {
    type: FAILURE,
    payload: value
  }
}

export const getSmurfs = () => async dispatch =>{
  dispatch({type: FETCH});
  const AxiosData = await axios.get('http://localhost:3333/smurfs')
  try{
    dispatch(success(AxiosData.data))
  }
  catch(err){
    dispatch(failure(AxiosData.statusText))
  }
}
export const addSmurf = (data) => async dispatch => {
  dispatch({type: CREATE}); 
  try{
    await axios.post('http://localhost:3333/smurfs' , data)
    dispatch(getSmurfs())
  }
  catch(err){
    dispatch(failure(err.message))
  }
}

export const updateSmurf = (id , data) => async dispatch => {
  dispatch ({type: UPDATE});

  try{
    await axios.put(`http://localhost:3333/smurfs/${id}`, data)
    dispatch(getSmurfs())
  }
  catch(err){
    dispatch(failure(err.message))
  }

}
export const deleteSmurf = (id) =>  async dispatch =>{
  dispatch ({type: DELETE});
  try{
    await axios.delete(`http://localhost:3333/smurfs/${id}`)
    dispatch(getSmurfs())
  }
  catch(err){
    dispatch(failure(err.message))
  }
}
