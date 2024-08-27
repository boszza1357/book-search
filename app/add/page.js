"use client";
import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

function page() {
    return (
        <Card color="transparent" shadow={false}>
         <Typography variant="h4" color="white">
           เพิ่มหนังสือ
         </Typography>
         <Typography color="gray" className="mt-1 font-normal">
กรุณากรอกข้อมูลเกี่ยวกับหนังสือที่ต้องการจะเพิ่ม !         </Typography>
         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
           <div className="mb-1 flex flex-col gap-6">
             <Typography variant="h6" color="white" className="-mb-3">
               Title Book
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="white" className="-mb-3">
               Author Book
             </Typography>
             <Input
               size="lg"
               placeholder="name@mail.com"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
             <Typography variant="h6" color="white" className="-mb-3">
               Price
             </Typography>
             <Input
               type="password"
               size="lg"
               placeholder="********"
               className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
               labelProps={{
                 className: "before:content-none after:content-none",
               }}
             />
           </div>
          
           <Button className="mt-6" fullWidth>
             เพิ่มหนังสือ
           </Button>
           <Typography color="gray" className="mt-4 text-center font-normal">
             <a href="#" className="font-medium text-gray-900">
               Sign In
             </a>
           </Typography>
         </form>
       </Card>
     );
}

export default page
