import { DELETE_MOVIE, ADD_MOVIE, EDITE_MOVIE } from "./typeActions";

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
}

export function deleteMovie(payload) {
  return { type: DELETE_MOVIE, payload };
}
export function editeMovie(payload, index) {
  return { type: EDITE_MOVIE, payload, index };
}
