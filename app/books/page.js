"use client";

import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

function Page() {
  // Correct useState syntax for state destructuring
  const [books, setBooks] = useState([]);

  const getAllbooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/books');
      const data = await response.json();
      setBooks(data); 
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getAllbooks();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">Book All!</h1>
      <p className="text-2xl mb-4"> By Dew</p>
      <Button color="brown" ripple="light">
        Book All!
      </Button>

      <div className="mt-8 w-full max-w-2xl">
        {books?.data?.map((book) => (
          <Card key={book.id} className="mb-4">
            <img src={book.image} alt={book.title} className="h-48 w-full object-cover" />
            <CardHeader color="lightBlue" className="text-white">
              {book.title}
            </CardHeader>
            <CardBody>
              <Link href={`/books/${book.id}`}>
              <Typography variant="h6">Author: {book.author}</Typography>
      </Link>
              <Typography variant="paragraph">Year: {book.year}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page;
