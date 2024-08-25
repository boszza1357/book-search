"use client";
import React, { useEffect, useState } from 'react'

import { Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardImage,} from "@material-tailwind/react";


function search() {
  const [query , setQyery] = useState()
  const [books , setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/data/books.json").then((res)=> res.json()).then((data) => setBooks(data));
  },[])

  console.log(books)

  const handleSearch = () =>{
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredBooks(filtered);
  }

  return (

 
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <h1 className="text-4xl font-bold">Search Books</h1>
    <p className="text-2xl mb-4"> Search</p>
    <div className='flex flex-col justify-center items-center py-8'>
   
    <Input value={query} onChange={(event) => setQyery(event.target.value)} type='text'  size="xl" placeholder="ค้นหาหนังสือ" label="ค้นหาหนังสือ"/>
    </div>
    <p> ค้นหาคำว่า  : {query}</p>
      
    <Button onClick={handleSearch} className='mt-5' color="blue" ripple="light" >
      Search
    </Button>
    <div className="mt-8 w-full max-w-2xl">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="mb-4">
            <CardImage src={book.image} alt={book.title} className="h-48 w-full object-cover" />
            <CardHeader color="lightBlue" className="text-white">
              {book.title}
            </CardHeader>
            <CardBody>
              <Typography variant="h6">Author: {book.author}</Typography>
              <Typography variant="paragraph">Year: {book.year}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>


  </div>
  )
}

export default search
