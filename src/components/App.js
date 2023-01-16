import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const URL = "http://localhost:3001/toys"

  const [showForm, setShowForm] = useState(false);

  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function pessDelete(id) {
    setToys(toys.filter(toy => toy.id !== id));
  }

  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(toysList => setToys(toysList))
    .catch(err => console.log(err))
  }, []);


  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} setToys={setToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} pessDelete={pessDelete}/>
    </>
  );
}

export default App;
