import produce from 'immer';

const INITIAL_STATE = {
  student: null,
  isValid: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/VALIDATE_SUCCESS': {
        draft.student = action.payload.student;
        draft.isValid = true;
        break;
      }
      default:
    }
  });
}
