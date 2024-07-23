import React from "react";
import LogoImage from "../../assets/logo.png";

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} style={{marginTop:20,position:'absolute',left:20,top:20}} />;
}
