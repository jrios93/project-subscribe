"use client";
import React, { useState } from "react";
import Sections from "@/app/components/Sections";
import Subscribe from "@/app/components/Subscribe";

const Home = () => {
  const [showSections, setShowSections] = useState(true);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubscribeClick = () => {
    setShowSections(false);
    setShowSubscribe(true);
  };

  const handleDismiss = () => {
    setShowSections(true);
    setShowSubscribe(false);
    setInputValue("");
    setEmailError("");
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(event.target.value);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(value)) {
      setEmailError("Valid email required");
    } else {
      setEmailError("");
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-primary">
      {showSections && (
        <Sections
          onSubscribeClick={handleSubscribeClick}
          inputValue={inputValue} // Pasar el valor del input
          onInputChange={handleInputChange}
          emailError={emailError}
        />
      )}
      {showSubscribe && (
        <Subscribe onDismiss={handleDismiss} inputValue={inputValue} />
      )}
    </section>
  );
};

export default Home;
