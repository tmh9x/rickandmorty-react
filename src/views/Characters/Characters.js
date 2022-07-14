import * as React from "react";
import { useState, useEffect } from "react";
import CreateCard from "../../components/CreateCard/CreateCard";
import NavBar from "../../components/NavBar/NavBar";
import BasicPagination from "../../components/BasicPagination/BasicPagination";
import "./Characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);

  const getInput = (event) => {
    setInput(event.target.value);
  };

  const results = !input
    ? characters
    : characters.filter((character) =>
        character.name.toLowerCase().includes(input.toLocaleLowerCase())
      );

  const getAllCharacters = async (page) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const characters = await response.json();
      setCharacters(characters.results);
      setPageNumber(characters.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  /* console.log("characters :>> ", characters); */
  console.log("page", page);
  console.log("type", typeof page);

  useEffect(() => {
    getAllCharacters(page);
  }, [page]);

  return (
    <>
      <NavBar getInput={getInput} />
      <div className="pagination">
        <BasicPagination
          setPage={setPage}
          page={page}
          pageNumber={pageNumber}
        />
      </div>
      <div className="container">
        {results.map((character) => (
          <CreateCard key={character.id} props={character} />
        ))}
      </div>
    </>
  );
}
