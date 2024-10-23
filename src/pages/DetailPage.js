import React from 'react'
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import books from "../books.json";


function DetailPage() {
    const params = useParams();
    const bookId = params.id;
    const book = books.find((book) => book.id === bookId)

    if(!book) return (
            <Typography variant="h3" marginTop={3}>
                No book find
            </Typography>
    )


  return (
    <Container sx={{ width: 900 }}>
         <Typography variant="h3" marginTop={3}>
            {book.title}
        </Typography> 

        
        <Box marginTop={3} sx={{display: "flex" }}>
            {book.skills}
        </Box> 

        <Box marginTop={5} sx={{display: "flex" }} alignItems="center"> 
            {book.city}
        </Box>

    </Container>
  )
}

export default DetailPage;