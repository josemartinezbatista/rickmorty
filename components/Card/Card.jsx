import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { removeFavorites, addFavorites } from "../../redux/actions";
import { connect } from "react-redux";

function Card({ name, species, gender, image, onClose, detailId, addFavorites, removeFavorites, allCharacters }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.detailId === detailId) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  const handleFavorite = () => {
    if (isFav) {
      removeFavorites(detailId);
      setIsFav(false);
    }
    if (!isFav) {
      const char = { name, species, gender, image, detailId };
      addFavorites(char);
      setIsFav(true);
    }
  };

  return (
    <div className={`${styles.card}`} id={detailId}>
      <div className={onClose ? styles.favorites : styles.favoritesF}>
        <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      </div>

      {onClose && (
        <div className={styles.button} onClick={onClose}>
          X
        </div>
      )}

      <Link to={`/detail/${detailId}`}>
        <h2 className={onClose ? styles.name : styles.nameF}>{name}</h2>
        <img src={image} alt={name} />
      </Link>
      {onClose && (
        <div className={styles.info}>
          <h2 className={styles.species}>{species}</h2>
          <h2 className={styles.gender}>{gender}</h2>
        </div>
      )}
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: (char) => dispatch(addFavorites(char)),
    removeFavorites: (id) => dispatch(removeFavorites(id)),
  };
}

export function mapStateToProps(state) {
  return {
    allCharacters: state.allCharacters,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
