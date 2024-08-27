"use client";

import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  // สร้างตัวแปรไว้รอรับข้อมูล
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const json = await fetch("http://localhost:8000/book/" + params.id);
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
      <h1 className="text-4xl font-bold">หนังสือ : {books?.data?.title}</h1>
      <p className="text-2xl mb-4">By : {books?.data?.author}</p>

      <div className="mt-8 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-4">
          <Card key={books?.data?.id} className="mb-4 overflow-hidden">
            <img
              src={books?.data?.image}
              alt={books?.data?.title}
              className="h-96 w-full object-cover"
            />

            <CardBody>
              <Typography variant="h5">{books?.data?.title}</Typography>
              <Typography variant="h6">
                Author: {books?.data?.author}
              </Typography>
              <Typography variant="paragraph">
                price: {books?.data?.price}
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Page;