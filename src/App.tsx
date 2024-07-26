// import React from "react";
import Navbar from './components/navbar.tsx';
// import Button from './components/button.tsx';
import Main from './components/main.tsx';
import DropdownFeatures from './components/dropdown-features.tsx';
import DropdwonCompany from './components/dropdown-company.tsx';

export default function App() {
  return (
    <body className="font-epilogue">
      <Navbar></Navbar>
      <DropdownFeatures></DropdownFeatures>
      <DropdwonCompany></DropdwonCompany>
      <Main></Main>
    </body>
  )
}