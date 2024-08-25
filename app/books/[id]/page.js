"use client";

import React, { useEffect, useState } from 'react';

// ดึงข้อมูล params จาก props
function Page({ params }) {
  const { id } = params;  // ดึง id จาก params

  // ใช้ state เป็น book เพราะดึงข้อมูลหนังสือเพียงเล่มเดียว
  const [book, setBook] = useState(null);

  // ฟังก์ชันดึงข้อมูลหนังสือตาม ID
  const getById = async () => {
    try {
      const response = await fetch(`http://localhost:8000/book/${id}`); // ใช้ id ใน URL
      const result = await response.json();
      console.log(result);
      setBook(result.data);  // อัพเดทสถานะด้วยข้อมูลหนังสือที่อยู่ภายใน data
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-3xl font-bold">รายละเอียดหนังสือ</h1>
      {/* ตรวจสอบว่ามีข้อมูลก่อนที่จะแสดง */}
      {book ? (
        <>
          <p className="text-xl">ชื่อหนังสือ: {book.title}</p>
          <p className="text-xl">ผู้แต่ง: {book.author}</p>
          <p className="text-xl">ราคา: {book.price}</p>
          <img src={book.image} alt={book.title} className="h-48 w-auto object-cover mt-4" />
        </>
      ) : (
        <p className="text-xl">กำลังโหลดข้อมูลหนังสือ...</p>
      )}
    </div>
  );
}

export default Page;
