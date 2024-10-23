import React, { useContext } from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import books from "../books.json";
import { useState } from 'react';
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import BookCard from "../components/BookCard";
import LoginForm from "../components/LoginForm";
import LearnModal from "../components/LearnModal";
import { AuthContext }  from "../context/AuthContext";


function HomePage() {
  const { isLoginFormDisplay, isLearnModalDisplay, hideLoginForm, hideLearnModal, selectingBook } = useContext(AuthContext)
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;
 
  const indexOfLastBook = currentPage * booksPerPage; 
  const indexOfFirstBook = indexOfLastBook - booksPerPage; 
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <Container>
      <Grid container spacing={2} mt={1} >
        {currentBooks.map((book) => (
          <Grid key={book.id} item xs={12} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={2}>
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange} 
          color="primary"
        />
        <LoginForm
          open={isLoginFormDisplay} 
          handleClose={hideLoginForm}
        />
        <LearnModal  
          open={isLearnModalDisplay} 
          handleClose={hideLearnModal}
          book={selectingBook}
        />
      </Box>
    </Container>
    
  )
}

export default HomePage;