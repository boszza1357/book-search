"use client";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  // สร้างตัวแปรไว้รอรับข้อมูล
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const json = await fetch("http://localhost:8000/books");
    // ทำ ข้อมูล string จาก json ให้เป็น ข้อมูลแบบ Json
    const data = await json.json();
    // เซ็ตข้อมูลใหม่
    setBooks(data);
  };

  // สั่งให้ฟังชั่นทำงาน
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">หนังสือทั้งหมด</h1>
      {/* <p className="text-2xl mb-4">By : Thongchai Bunjamat</p> */}

      <div className="mt-8 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          {books?.data?.map((book) => (
            <Card key={book.id} className="mb-4 overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="h-96 w-full object-cover"
              />

              <CardBody>
                <Link href={"/books/"+book.id}>
                  <Typography variant="h5">{book.title}</Typography>
                </Link>

                <Typography variant="h6">Author: {book.author}</Typography>
                <Typography variant="paragraph">Price: {book.price}</Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;