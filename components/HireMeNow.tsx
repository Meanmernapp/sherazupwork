import React from "react";
import { Button } from "./ui/button";

const HireMeNow = () => {
  return (
    <a href="mailto:codewithfarhan1@gmail.com" target="_blank" rel="noopener noreferrer">
      <Button className="rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-7 font-semibold text-white shadow-lg shadow-violet-900/40 hover:from-violet-500 hover:to-amber-500 hover:text-white">
        Hire Me Now
      </Button>
    </a>
  );
};

export default HireMeNow;
