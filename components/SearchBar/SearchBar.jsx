import styles from "./SearchBar.module.css";
import React, { useState } from "react";
import styled from "styled-components";

const ButtonA = styled.button`
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  background: none;
  border: 2px solid;
  border-bottom-width: 4px;
  letter-spacing: 0.125em;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 25px;
  padding-left: 20px;
  padding-right: 20px;
  text-transform: uppercase;
  transition: color 0.6s;
  color: #ccc;
  cursor: pointer;

  &:hover {
    animation: halftone 0.5s forwards;
    background: radial-gradient(circle, #000000b2 0.2em, transparent 0.25em) 0 0 / 1.25em 1.25em,
      radial-gradient(circle, #000000b2 0.2em, transparent 0.25em) 6.25em 6.25em / 1.25em 1.25em;
    color: #9c89f7;
  }

  @keyframes halftone {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`;

export default function SearchBar({ onSearch }) {
  const [character, setName] = useState("");

  function handleInputChange(e) {
    setName(e.target.value);
  }

  const handleSearch = (e) => {
    onSearch(character);
    setName("");
  };

  return (
    <div className={`${styles.searchBar}`}>
      <input type="text" value={character} onChange={handleInputChange} />
      <ButtonA onClick={handleSearch}>Add</ButtonA>
    </div>
  );
}
