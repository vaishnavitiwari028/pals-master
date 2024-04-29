import { useRef, useState } from "react";

const useImageUpload = ({ initialImageUrl = "" } = {}) => {
  const [tempImageURL, setTempImageURL] = useState(initialImageUrl);
  const [imageFile, setImageFile] = useState();
  const imgRef = useRef();

  const onImageChange = (e) => {
    e.persist();
    let imgFile = e.target.files[0];
    if (imgFile) {
      setImageFile({ imgFile });
    }
    let tempImgUrl = URL.createObjectURL(imgFile);
    setTempImageURL(tempImgUrl);
  };
  const chooseImage = () => {
    imgRef.current.click();
  };
  const removeImage = () => {
    setTempImageURL(null);
  };
  return {
    tempImageURL,
    onImageChange,
    imageFile: imageFile?.imgFile,
    imgRef,
    chooseImage,
    removeImage,
  };
};

export default useImageUpload;
