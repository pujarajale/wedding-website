// This component allows users to upload a custom background image for the invitation.

import { useDropzone } from "react-dropzone";

const BackgroundUpload = ({ onUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <div className="upload-background">
      <h3>Upload Background Image</h3>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop an image here or click to select files</p>
      </div>
    </div>
  );
};

export default BackgroundUpload;
