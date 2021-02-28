import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newPerson]);
    setPerson({ firstName: "", email: "", age: "" });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age :</label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
              required
            ></input>
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
