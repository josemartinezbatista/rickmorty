import { useState } from "react";
import { validation } from "./validation";
import styles from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.userName}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
        </div>
        {errors.username && <p className={styles.errors}>{errors.username}</p>}

        <div className={styles.password}>
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
        </div>
        {errors.password && <p className={styles.errors}>{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
