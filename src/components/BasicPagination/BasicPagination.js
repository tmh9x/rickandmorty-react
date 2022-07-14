import * as React from "react";
import Pagination from "@mui/material/Pagination";

export default function BasicPagination({ setPage, pageNumber }) {
  const handleChange = (page) => {
    console.log("page", page);
    setPage(page);
  };

  return (
    <Pagination
      onChange={(event, page) => handleChange(page)}
      count={pageNumber}
      color="primary"
      showFirstButton
      showLastButton
    />
  );
}
