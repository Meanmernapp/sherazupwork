import React, { useState } from 'react'
import { Button } from './ui/button'
import { EmailDialog } from './ContactInfo'

const HireMeNow = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <a href="https://www.upwork.com/freelancers/sherazreactnextdeveloper" target="_blank" rel="noopener noreferrer">
            <Button onClick={() => setIsOpen(true)} variant="outline" className="border-white bg-black text-white hover:bg-white hover:text-black">
                Hire Me Now!
            </Button>
           
        </a>
    )
}

export default HireMeNow
