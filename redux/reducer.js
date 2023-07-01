import { ADD_FAVORITES, REMOVE_FAVORITES, FILTER, ORDER, FILTERSPECIE } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES: {
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload],
      };
    }
    case REMOVE_FAVORITES: {
      return {
        ...state,
        allCharacters: [...state.allCharacters.filter((char) => char.detailId !== Number(action.payload))],
        myFavorites: [...state.allCharacters.filter((char) => char.detailId !== Number(action.payload))],
      };
    }

    case FILTER: {
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: [...state.allCharacters],
        };
      }

      return {
        ...state,
        myFavorites: [...state.allCharacters.filter((char) => char.gender === action.payload)],
      };
    }

    case FILTERSPECIE: {
      if (action.payload === "All") {
        return {
          ...state,
          myFavorites: [...state.myFavorites],
        };
      }

      return {
        ...state,
        myFavorites: [...state.myFavorites.filter((char) => char.species === action.payload)],
      };
    }

    case ORDER: {
      if (action.payload === "Ascendente") {
        return {
          ...state,
          myFavorites: [...state.myFavorites.sort((a, b) => a.name.localeCompare(b.name))],
        };
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites.sort((a, b) => b.name.localeCompare(a.name))],
        };
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
