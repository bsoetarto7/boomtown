const GET_STEP_INDEX = 'GET_STEP_INDEX';
const NEXT_STEP_INDEX = 'NEXT_STEP_INDEX';
const PREVIOUS_STEP_INDEX = 'PREVIOUS_STEP_INDEX';

export const getStepIndex = () => ({
  type:GET_STEP_INDEX
});

export const setNextStepIndex = (step) => ({
  type: NEXT_STEP_INDEX,
  step: step
});

export const setPrevStepIndex = (step) => ({
  type: PREVIOUS_STEP_INDEX,
  step: step
})

const initialState = {
  stepIndex:0
}

export default (state = initialState, action) => {
  switch (action.type){
    case GET_STEP_INDEX:
      return state;

    case NEXT_STEP_INDEX:
      console.log(action);
      return {
        ...state,
        stepIndex: action.step + 1 
      }
    case PREVIOUS_STEP_INDEX:
      return{
        ...state,
        stepIndex: action.step - 1
      }
    default:
      return state;
  }
}
