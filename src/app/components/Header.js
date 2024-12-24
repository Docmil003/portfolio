//import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';

import HeaderBar from "./navbar/headerBar";

export default function Header() {
  return (
  <header className="d-flex flex-column justify-content-center pt-2 mb-2 w-100" style={{backgroundColor :"rgb(161, 205, 255)"}}>
      <div className="text-center py-2 mt-5">
        <h1>Kingsley Shyne Mattis Sogorb</h1>
      </div>
      <div className="text-center">
        <h2>Video Game Programmer</h2>
      </div>
      <div className="text-center">
        <h6>Page under development</h6>
      </div>
      <div className="text-center">
        <HeaderBar>
        </HeaderBar>
      </div>
    </header>
  );
}
