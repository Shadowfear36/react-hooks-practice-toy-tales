import React, {useState} from "react";

function ToyForm({toys, setToys}) {

  const URL = "http://localhost:3001/toys";

  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }

  function handleImageChange(e) {
    setImageInput(e.target.value);
  }

  function addNewToy(e) {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        "name": nameInput,
        "image": imageInput,
        "likes": 0
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => setToys([...toys, {
      "id": toys.length + 1,
      "name": nameInput,
      "image": imageInput,
      "likes": 0
    }]))
    .then(() => {
      setNameInput("");
      setImageInput("");
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {nameInput}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {imageInput}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
