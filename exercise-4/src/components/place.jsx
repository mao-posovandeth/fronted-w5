import React from "react";

export default function Place({ id, title, image }) {
  return (
    <li key={id} className="place-item">
      <button className="place-button">
        <img src={image.src} alt={image.alt} className="place-image" />
        <h3 className="place-title">{title}</h3>
      </button>
    </li>
  );
}
