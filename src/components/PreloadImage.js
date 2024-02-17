import { useEffect } from "react";

const PreloadImage = src => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      console.log(`Image ${src} loaded success`);
    }
    return () => {
      img.onload = null;
    }
  },[src]);

  return null;
};

export default PreloadImage;