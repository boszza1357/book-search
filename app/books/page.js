"use client";

import { Button } from "@material-tailwind/react";
import React from 'react'

function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <h1 className="text-4xl font-bold">Book All!</h1>
    <p className="text-2xl mb-4"> By Dew</p>
    <Button color="lightBlue" ripple="light">
      Book All!
    </Button>
  </div>
  )
}

export default page
