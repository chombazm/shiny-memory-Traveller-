import React from "react";
import "./style.css";

type Props = {
  image: string;
};

export const PoweredBy = ({image}: Props) => {
  return (
    <div className="powered-by-container">
      <a href="https://www.linkedin.com/in/chomba-chanda-bab8ab20b/" target="_blank">
      <img className="powered-by-image" src={image} alt="powered by Chomba" title="Site powered by Chomba" />
      </a>
    </div>
  )
}