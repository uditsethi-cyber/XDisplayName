import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const initialName = {
    firstName: "",
    lastName: "",
  };
  const [userName, setUserName] = useState(initialName);
  const [payload, setPayload] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayload({ ...userName });
  };

  return (
    <>
      <form id="center" onSubmit={handleSubmit}>
        <h3>Full Name Display</h3>
        <span>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userName.firstName}
            onChange={handleChange}
            required
          />
        </span>
        <span>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userName.lastName}
            onChange={handleChange}
            required
          />
        </span>
        <button type="submit">Submit</button>
      </form>
      {payload?.firstName && payload?.lastName && (
        <p>
          <strong>
            Full Name: {payload.firstName} {payload.lastName}
          </strong>
        </p>
      )}
    </>
  );
}

export default App;
