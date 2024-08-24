"use client";
import { Button } from "@material-tailwind/react";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <h1 className="text-4xl font-bold">Welcome to Book Search!</h1>
    <p className="text-2xl mb-4"> By Dew</p>
    <Button color="lightBlue" ripple="light">
      Get Started
    </Button>
  </div>
  );
}
