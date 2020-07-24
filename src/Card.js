import React from "react";

function Card(props) {

function handleClick() {
    props.Delete(props.id);
  }
  return (
<a href='#' >
      <a href={props.src} data-fancybox>
      <img className="gallery" src={props.src} />
      </a>
      <button className="delete_button" onClick={handleClick}>X</button>
</a>
);
}
export default Card;
