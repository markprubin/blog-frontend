import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(undefined);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  // const [checkbox, setCheckbox] = useState(false);

  // handleClick = () => {
  //   const
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            className="form-control"
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <small>{20 - name.length} characters remaining</small>
        <div>
          Email: <input className="form-control" name="email" type="email" />
        </div>
        <div>
          Password:
          <input
            className="form-control"
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          Password confirmation:
          <input
            className="form-control"
            value={password_confirmation}
            name="password_confirmation"
            type="password"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>
        {password_confirmation !== password ? <small className="text-danger">Passwords do not match</small> : null}

        {/* <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            checked={checkbox}
            onChange={(event) => setCheckbox(event.target.checked)}
            id="flexCheckDefault"
          />
        </div> */}

        {/* {checkbox === false ? <small>Accept the conditions before signing up</small> : null} */}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
