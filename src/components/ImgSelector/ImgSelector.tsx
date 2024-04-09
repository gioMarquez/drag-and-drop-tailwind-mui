import React, { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';

const ImgSelector = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', 'qyf69w96'); // Replace with your upload preset
    formData.append('api_key', '591166547416372'); // Replace with your API key

    const res = await fetch('https://api.cloudinary.com/v1_1/djol4nrym/image/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        {/* <input type="text" /> */}
        <div {...getRootProps()} className="container-dropzone">
          <input {...getInputProps()} type="file" accept="image/jpeg, image/png" />
          {isDragActive ?
            <p>Suelta los archivos aquí ...</p> :
            <p>Arrastre y suelte algunos archivos aquí, o haga clic para seleccionar archivos</p>
          }
        </div>

        {
          acceptedFiles[0] && (
            <img src={URL.createObjectURL(acceptedFiles[0])} alt="Preview" 
              style={{
                width: '300px',
                height: '300px'
              }
              }/>
          )
        }
        <button className="styling-button">Enviar</button>
      </form>
    </div>

    
  );
};

export default ImgSelector;
