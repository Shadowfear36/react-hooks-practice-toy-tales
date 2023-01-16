import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, pessDelete }) {

  const renderToys = toys.map(toy => (
    <ToyCard key={toy.id} id={toy.id} name={toy.name} img={toy.image} likes={toy.likes} pessDelete={pessDelete}/>
  ))

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
