import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.Cards}>
      {characters.map((character, index) => (
        <Card
          key={index}
          detailId={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
