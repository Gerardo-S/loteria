import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/authContext";

const styles = {
  wrapper: {
    marginTop: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "12em",
  },
  submitButton: {
    marginTop: "1em",
  },
};

function SignupPage() {
  const { signup } = useAuth();
  const history = useHistory();
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [isPending, setIsPending] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formState;
    if (password.length < 8) {
      alert("Password must have at least 8 characters.");
    } else if (username.length < 6) {
      alert("Username must contain at least 6 characters.");
    } else if (username.length > 16) {
      alert("Username must not contain more than 16 characters.");
    } else {
      setIsPending(true);
      signup({ username, password })
        .then(() => history.push("/protected/example"))
        .catch((error) => {
          console.log(error);
          alert("An error occurred.");
          setIsPending(false);
        });
    }
  };
  return (
    <div style={styles.wrapper}>
      <h1>Signup</h1>
      <div>{isPending && "Loading..."}</div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formState.username}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default SignupPage;
