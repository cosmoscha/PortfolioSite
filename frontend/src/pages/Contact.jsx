import React, { useEffect, useState } from "react";
const Contact = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div
            className={`transition-opacity duration-500 ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
            <h1>Contact Me</h1>
            <p>Email: cosmos.cha1997@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/river-cha</p>
        </div>
    );
};

export default Contact;
