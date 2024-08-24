"use client";
import React from 'react'

import { Button } from "@material-tailwind/react";

function search() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <h1 className="text-4xl font-bold">Search Books</h1>
    <p className="text-2xl mb-4"> Search</p>
    <Button color="lightBlue" ripple="light">
      Search
    </Button>
  </div>
  )
}

export default search
