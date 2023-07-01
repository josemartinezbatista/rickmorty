const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const FILTER = "FILTER";
const ORDER = "ORDER";
const FILTERSPECIE = "FILTERSPECIE";

const addFavorites = (character) => {
  return {
    type: ADD_FAVORITES,
    payload: character,
  };
};

const removeFavorites = (id) => {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
};

const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};

const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

const filterSpecie = (specie) => {
  return {
    type: FILTERSPECIE,
    payload: specie,
  };
};

export {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  FILTER,
  ORDER,
  FILTERSPECIE,
  addFavorites,
  removeFavorites,
  filterCards,
  orderCards,
  filterSpecie,
};
