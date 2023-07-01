import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { filterCards, orderCards, filterSpecie } from "../../redux/actions";

function Favorites({ myFavorites, allCharacters }) {
  const [gender, setGender] = useState("All");
  const [specie, setSpecie] = useState("All");
  const [order, setOrder] = useState("Ascendente");

  const genders = [...new Set(allCharacters.map((char) => char.gender))];
  const species = [...new Set(allCharacters.map((char) => char.species))];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCards(gender));
    dispatch(filterSpecie(specie));
    dispatch(orderCards(order));
  }, [allCharacters]);

  function handleOrder(e) {
    setOrder(e.target.value);
    dispatch(orderCards(e.target.value));
  }

  function handleFilterGender(e) {
    setGender(e.target.value);
    dispatch(filterCards(e.target.value));
    dispatch(filterSpecie(specie));
  }

  function handleSpecie(e) {
    setSpecie(e.target.value);
    dispatch(filterCards(gender));
    dispatch(filterSpecie(e.target.value));
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <select class={styles.dropbox} onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descencente</option>
        </select>

        <select class={styles.dropbox} onChange={handleFilterGender}>
          <option value="All">All Genders</option>
          {genders.map((gender) => (
            <option value={gender}>{gender}</option>
          ))}
        </select>

        <select class={styles.dropbox} onChange={handleSpecie}>
          <option value="All">All Species</option>
          {species.map((specie) => (
            <option value={specie}>{specie}</option>
          ))}
        </select>
      </div>

      <div className={styles.Favorites}>
        {myFavorites.map((character) => (
          <Card
            key={character.detailId}
            detailId={character.detailId}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose=""
          />
        ))}
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps)(Favorites);
