import React from "react";

export default function Place({ id, title, name, image, meta }) {
  return (
    <li key={id} className="place-item">
      <button className="place-button">
        <img src={image.src} alt={image.alt} className="place-image" />
        <h3 className="place-title">{name || title}</h3>
        {meta && (
          <p className="place-meta">
            <strong>{meta.class}</strong>
            <br />
            <span style={{ color: "var(--muted)" }}>{meta.extra}</span>
          </p>
        )}
      </button>
    </li>
  );
}
