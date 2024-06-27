import { INCREMENT, DECREMENT, RESET } from './action';

const initialState = {
  value: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      if (state.value > 0)
        return { ...state, value: state.value - 1 };
    case RESET:
      return { ...state, value: initialState.value };
    default:
      return state;
  }
}