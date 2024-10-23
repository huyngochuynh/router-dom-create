import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../context/AuthContext";

export default function BookCard ({ book }) {
  const { learnMore } = React.useContext(AuthContext)
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book?.title ?? ""}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book?.skills ?? ""}
        </Typography>


        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {book?.description ?? ""}
        </Typography>
      </CardContent>


      <CardActions>
        <Button size="small" 
          variant="contained" color="success"
          onClick={() => learnMore(book)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}