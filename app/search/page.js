"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

import Link from "next/link";

import React, { useEffect, useState } from "react";

function Page() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  console.log(books);

  useEffect(() => {
    // ดึงข้อมูลจากไฟล์ JSON
    // const json = await  fetch("http://localhost:3000/data/books.json")
    // const data = await json.json()
    // setBooks(data)

    fetch("http://localhost:8000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSearch = () => {
    const filtered = books.data.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredBooks(filtered);
  };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">ค้นหาหนังสือที่นี่!</h1>

      <div className="flex flex-col justify-center items-center py-8">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          size="lg"
          placeholder="ค้นหาหนังสือ"
          label="ค้นหาหนังสือ"
        />
        <p className="mt-4">ค้นหาคำว่า : {query}</p>
      </div>

      <Button onClick={handleSearch} color="blue" ripple="light">
        ค้นหา
      </Button>

      <div className="mt-8 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="mb-4 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="h-96 w-full object-cover"
              />

              <CardBody>
                <Typography variant="h5">{book.title}</Typography>
                <Typography variant="h6">Author: {book.author}</Typography>
                <Typography variant="paragraph">Year: {book.year}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
