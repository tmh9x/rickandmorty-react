import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./CreateCard.css";

function CreateCard(character) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /*   console.log("character", character); */

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
            <Typography
              className="modal-title"
              id="modal-modal-title"
              variant="h4"
              component="h4"
            >
              {character.props.name}
            </Typography>
            <Typography
              className="modal"
              id="modal-modal-title"
              variant="p"
              component="p"
            >
              Gender: {character.props.gender}
            </Typography>
            <Typography
              className="modal"
              id="modal-modal-title"
              variant="p"
              component="p"
            >
              Species: {character.props.species}
            </Typography>
            <Typography
              className="modal"
              id="modal-modal-title"
              variant="p"
              component="p"
            >
              Status: {character.props.status}
            </Typography>
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}

export default CreateCard;
