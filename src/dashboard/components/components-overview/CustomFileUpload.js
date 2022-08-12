import React, { useState } from "react";

const CustomFileUpload = ({ onChange }) => {
  let [avatar] = useState(null);
  const inputChangedHandler = async (e) => {
    let base64Format = await convertBase64(e.target.files[0]);
    onChange(base64Format);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="custom-file mb-3">
      <input
        type="file"
        className="custom-file-input"
        id="customFile2"
        value={avatar}
        onChange={inputChangedHandler}
      />
      <label className="custom-file-label" htmlFor="customFile2">
        Choose file...
      </label>
    </div>
  );
};

export default CustomFileUpload;
