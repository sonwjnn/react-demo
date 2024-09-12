import { State, Action } from "./types";

export const initialState: State = {
  posts: [],
  loading: true,
  error: null,
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, posts: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
