import { useState } from "react";
import classes from "./Gallery.module.css";
import {
  G1,
  G10,
  G11,
  G12,
  G13,
  G14,
  G15,
  G2,
  G3,
  G4,
  G5,
  G6,
  G7,
  G8,
  G9,

} from "src/Utils/MediaFilesPath";
import LazyShow from "src/animations/LazyShow";

 const Gallery = () => {
  const Gallery = [
    G1,
    G2,
    G3,
    G4,
    G5,
    G6,
    G7,
    G8,
    G9,
    G10,
    G11,
    G12,
    // G13,
    G14,
    G15,
  ];

  const [imgUrl, setImgUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (url: string) => {
    setShowModal(true);
    setImgUrl(url);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setImgUrl("");
  };
  return (
    <LazyShow>
      <div className="text-center">
        <h1 className="text-[2rem] font-bold mt-[1rem]">Gallery</h1>
      </div>
      <div className={classes["image-gallery"]}>
        {Gallery?.map((item,index) => (
          <img
            key={index}
            src={item}
            alt="gallery"
            className={classes["gallery-image"]}
            onClick={() => handleImageClick(item)}
          />
        ))}

        {showModal && (
          <div className={classes["modal-container"]}>
            <span className={classes["close"]} onClick={handleCloseModal}>
              &times;
            </span>
            <img
              className={classes["modal-content"]}
              src={imgUrl}
              alt={"alt"}
            />
          </div>
        )}
      </div>
    </LazyShow>
  );
};

export default Gallery