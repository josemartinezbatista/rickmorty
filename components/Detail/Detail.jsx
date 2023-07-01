import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

export function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter();
  }, [detailId]);

  if (character) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.gridDetail}>
          <div className={styles.columnInfo}>
            <Link to={-1}>
              <button>Back</button>
            </Link>

            <div className={styles.infoChar}>
              <h2>{character.name}</h2>
              <h4>Status: {character.status}</h4>
              <h4>Specie: {character.species}</h4>
              <h4>Gender: {character.gender}</h4>
              <h4>Origin: {character.origin.name}</h4>
            </div>
          </div>

          <div className={styles.charImage}>
            <div className={styles.imgContent}>
              <img src={character.image} alt={character.name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
