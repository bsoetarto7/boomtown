const GET_STEP_INDEX = 'GET_STEP_INDEX';
const NEXT_STEP_INDEX = 'NEXT_STEP_INDEX';
const PREVIOUS_STEP_INDEX = 'PREVIOUS_STEP_INDEX';
const SET_SELECTED_TAGS = 'SET_SELECTED_TAGS';
const SET_IMAGE_FILE_UPLOAD = 'SET_IMAGE_FILE_UPLOAD';
const SET_IMAGE_FILE_UPLOAD_PLACEHOLDER = 'SET_IMAGE_FILE_UPLOAD_PLACEHOLDER';

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

export const setSelectedTags = (tags) => ({
  type:SET_SELECTED_TAGS,
  tags: tags
})

export const setImageUpload = (file) => ({
  type: SET_IMAGE_FILE_UPLOAD,
  file: file
})

export const setImageUploadPlaceHolder = (imageData) => ({
  type: SET_IMAGE_FILE_UPLOAD_PLACEHOLDER,
  imageData:imageData
})

const initialState = {
  stepIndex:0,
  selectedTags:[],
  imageFile:null,
  imageData:null,
  shareDateNow: `${(new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, -1).replace('T', ' ')}-07`
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
    case SET_SELECTED_TAGS:
      return{
        ...state,
        selectedTags:action.tags
      }
    case SET_IMAGE_FILE_UPLOAD:
      return{
        ...state,
        imageFile: action.file
      }
    case SET_IMAGE_FILE_UPLOAD_PLACEHOLDER:
    return{
      ...state,
      imageData: action.imageData
    }
    default:
      return state;
  }
}
