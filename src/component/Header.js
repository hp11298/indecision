
import React from 'react';
import ReactDOM from 'react-dom';

const Header=(props)=>
//{
   // console.log('tye');
 // return (
  (  <div className="header">
     <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2  className="header__subtitle" >{props.subtitle }</h2>
      </div>
    </div>)
 // );
//};

Header.defaultProps={
title:"hi",
subtitle:"fr",
age:34
};

export default Header;

const y=5;
export {y};