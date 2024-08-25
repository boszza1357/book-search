"use client";

import { Button } from "@material-tailwind/react";
import React from 'react'

function account() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <h1 className="text-4xl font-bold">In My Book</h1>
    <p className="text-2xl mb-4"> By Dew</p>
    <Button color="pink" ripple="light">
      My Book
    </Button>
  </div>
  )
}

export default account
