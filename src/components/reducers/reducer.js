import { DELETE_MOVIE, ADD_MOVIE, EDITE_MOVIE } from "../actions/typeActions";

const initialState = {
  films: [
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-rzus2fCA8WAj5apV3wLy7rmc5MrwiFA7lVmyAzJRvOQjHLVZ",
      name: "The stary",
      rating: 2,
      trailer: "https://www.youtube.com/embed/fKDNsDBR_Hg",
      id: 45454
    },
    {
      src:
        "https://amc-theatres-res.cloudinary.com/v1562680032/amc-cdn/production/2/movies/56400/56408/PosterDynamic/83473.jpg",
      name: "Dora Dora",
      rating: 1,
      trailer: "https://www.youtube.com/embed/LxoEhraU2ig",
      id: 48484
    },
    {
      src:
        "https://regalcdn.azureedge.net/DoctorSleep/HO00009866/TV_SmallPosterImage/20191009-124901292.jpg",
      name: "Doctor Sleep",
      rating: 2,
      id: 23145,
      trailer: "https://www.youtube.com/embed/mvftXDMBPXQ"
    }
  ]
};

const reducerMovie = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, films: [...state.films, action.payload] };

    case DELETE_MOVIE:
      console.log(action.payload);

      return {
        ...state,
        films: state.films.filter(el => el.id !== action.payload)
      };

    case EDITE_MOVIE:
      return {
        ...state,
        films: state.films.map(el =>
          el.id === action.payload.id
            ? {
                ...el,
                name: action.payload.name,
                src: action.payload.src,
                rating: action.payload.rating
              }
            : el
        )
      };

    default:
      return state;
  }
};

export default reducerMovie;
