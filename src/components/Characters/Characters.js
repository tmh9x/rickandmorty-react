import * as React from "react";
import { useState, useEffect } from "react";
import CreateCard from "../CreateCard/CreateCard";
import NavBar from "../NavBar/NavBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Characters.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);

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
    } catch (error) {
      console.log(error);
    }
  };

  console.log("characters :>> ", characters);
  console.log("page", page);
  console.log("type", typeof page);

  const handleChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    getAllCharacters(page);
  }, [page]);

  return (
    <>
      <NavBar getInput={getInput} />
      <Stack spacing={2}>
        <Pagination
          className="pagination"
          onChange={(event) => handleChange(event.target.textContent)}
          // color the number in the slider
          page={parseInt(page)}
          count={10}
          color="primary"
        />
      </Stack>
      <div className="container">
        {results.map((character) => (
          <CreateCard key={character.id} props={character} />
        ))}
      </div>
    </>
  );
}
