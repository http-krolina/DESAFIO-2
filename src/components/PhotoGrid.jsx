import React from "react";
import "./PhotoGrid.css";

const PhotoGrid = ({ photos }) => {
  if (photos.length === 0) {
    return <div className="no-results">Nenhuma foto encontrada</div>;
  }

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <div className="photo-image-container">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="photo-image"
              loading="lazy"
            />
          </div>
          <div className="photo-title">{photo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
