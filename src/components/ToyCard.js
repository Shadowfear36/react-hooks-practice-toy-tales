import React, { useState } from "react";

function ToyCard({ id, name, img, likes, pessDelete }) {

  const [likeCount, setLikeCount] = useState(likes);

  const URL = "http://localhost:3001/toys"


  function handleLike(){
    setLikeCount(likeCount + 1);
    fetch(URL+"/"+id, {
      method: 'PATCH',
      body: JSON.stringify({
        "likes": likeCount + 1
      }),
      headers: {
        'Content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }

  function handleDelete(){
    fetch(URL+"/"+id, {
      method: 'DELETE',
      headers: {
        "Content-Type": 'application/json'
      }
    })
    pessDelete(id);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
