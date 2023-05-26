import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form(props) {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
    // console.log(userData)
    setErrors(
      validation({
        ...userData,
        [name]: value
      })
    )
    console.log(errors);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={styles.error}>
          {errors.username && errors.username}
        </p>
        <br />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={styles.error}>
          {errors.password && errors.password}
        </p>
        <hr />
        <button>Login</button>
      </form>
    </div>
  );
}
