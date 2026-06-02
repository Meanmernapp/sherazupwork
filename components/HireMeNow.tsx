import React from "react";
import { Button } from "./ui/button";

const HireMeNow = () => {
  return (
    <a href="mailto:codewith.yasiraqeel@gmail.com" target="_blank" rel="noopener noreferrer">
      <Button className="rounded-full border border-teal-400/40 bg-teal-400/10 px-6 text-white hover:bg-teal-400 hover:text-black transition-colors">
        Hire Me Now
      </Button>
    </a>
  );
};

export default HireMeNow;
