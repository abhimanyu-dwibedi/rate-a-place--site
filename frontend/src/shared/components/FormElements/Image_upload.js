import react, { useRef } from "react";
import Button from "./Button";
const ImageUpload = (props) => {
  const pickinagehandler = () => {
const filePicker

  };
  return (
    <div className='form-control'>
      <input
        id={props.id}
        style={{ display: "none" }}
        type='file'
        accept='.jpeg,.png,.jpg'
      />
      <div className={`image-upload ${props.center && "center"}`}></div>
      <div className='image-upload__preview'>
        <img src='' alt='Preview' />
      </div>
      <Button type='button' onClick={pickinagehandler}>
        pick image
      </Button>
    </div>
  );
};
export default ImageUpload;
