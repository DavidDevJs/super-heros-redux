import axios from "axios";
import { setHeroes } from "../app/slices/heroes";

const fetchAllHeroes = () => (dispatch) => {
  axios
    .get(`https://superheroapi.com/api/10481713873263/70`)
    .then((data) => dispatch(setHeroes(data)))
    .catch((err) => console.error(err));
};

export { fetchAllHeroes };
