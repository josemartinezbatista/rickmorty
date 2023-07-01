import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
  const handleClick = () => {
    let id = Math.floor(Math.random() * 826) + 1;
    onSearch(id);
  };
  return (
    <div className={styles.navBar}>
      <ul>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to={"/favorites"} style={{ textDecoration: "none" }}>
          <li>Favorites</li>
        </Link>
        <Link to={"/about"} style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link onClick={logout} style={{ textDecoration: "none" }}>
          <li>Logout</li>
        </Link>
      </ul>

      <div style={{ display: "flex" }}>
        <SearchBar onSearch={onSearch} />
        <button class={styles.random} onClick={handleClick}>
          Random
        </button>
      </div>
    </div>
  );
}
