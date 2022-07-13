import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function CreateCard(character) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("character", character);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card key={character.id} className="card" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="auto" image={character.props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {character.props.name}
        </Typography>
        <Button onClick={handleOpen}>Show More</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2>{character.props.name}</h2>
              <p>Gender: {character.props.gender}</p>
              <p>Species: {character.props.species}</p>
              <p>Status: {character.props.status}</p>
            </Typography>
          </Box>
        </Modal>
      </CardContent>
      {/*  <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
    </Card>
  );
}

export default CreateCard;
