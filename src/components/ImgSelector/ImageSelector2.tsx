// import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import { ChangeEvent, useState } from "react";

// const ImageSelector2: React.FC = () => {
//   const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
//     null
//   );

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setPreviewImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     event.stopPropagation();

//     const file = event.dataTransfer.files[0];
//     if (file) {
//       //Verificar si el archivo es de tipo imagen
//       if (file.type.startsWith("image/")) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           setPreviewImage(reader.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         //Mostrar mensaje de error si elarchivo no es una imagen
//         alert("Por favor selecciona un archivo de imagen válido");
//       }
//     }
//   };

//   return (
//     <div className="w-screen items-center justify-center mt-6 grid">
//       <div
//         className="flex items-center justify-center w-[600px] h-[50] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
//         onDragOver={handleDragOver}
//         onDragEnter={handleDragEnter}
//         onDrop={handleDrop}
//       >
//         <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
//           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//             {/* Mostrar la imagen previa si existe */}
//             {previewImage && (
//               <img
//                 src={previewImage as string}
//                 alt="Preview Image"
//                 className="mb-3 max-h-[170px]"
//               />
//             )}
//             {/* SVG de upload */}
//             {!previewImage && (
//               <svg
//                 className="w-10 h-10 mb-3 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                 />
//               </svg>
//             )}
//             <p className="mb-2 text-sm text-gray-500">
//               <span className="font-semibold">Haz click para subir</span> o arrastra y suelta aquí.
//             </p>
//             <p className="text-xs text-gray-500">
//               SVG, PNG, JPG or GIF (MAX. 800x400px)
//             </p>
//           </div>
//           {/* Input para seleccionar archivo */}
//           <input
//             id="dropzone-file"
//             type="file"
//             className="hidden"
//             accept="image/*" // Solo aceptar archivos de tipo imagen
//             onChange={handleFileChange}
//           />
//         </label>
//       </div>
//       <div className="grid grid-cols-2 pt-2 gap-4">
//         <Button
//           variant="contained"
//           endIcon={<DeleteIcon />}
//           color="error"
//           onClick={() => setPreviewImage(null)}
//         >
//           Eliminar
//         </Button>
//         <Button
//           variant="contained"
//           endIcon={<SendIcon />}
//           color="secondary"
//           onClick={() => alert("¡ACCIÖN TURBOOOOO!")}
//         >
//           Enviar
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ImageSelector2;


import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ChangeEvent, useState } from "react";

const ImageSelector2: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (file) {
      //Verificar si el archivo es de tipo imagen
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        //Mostrar mensaje de error si el archivo no es una imagen
        alert("Por favor selecciona un archivo de imagen válido");
      }
    }
  };

  const handleSendImage = async () => {
    // Verifica si hay una imagen base64 para enviar
    if (previewImage) {
      console.log("Objeto con la imagen base64:", { image: previewImage });

      // Aquí puedes agregar el código para enviar la imagen al backend
      // Por ejemplo:
      // try {
      //   const response = await fetch('URL_DEL_BACKEND', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ image: previewImage }),
      //   });

      //   if (response.ok) {
      //     console.log('Imagen enviada exitosamente al backend');
      //   } else {
      //     console.error('Error al enviar la imagen al backend');
      //   }
      // } catch (error) {
      //   console.error('Error de red:', error);
      // }
    } else {
      console.warn("No hay ninguna imagen para enviar.");
    }
  };

  return (
    <div className="w-screen items-center justify-center mt-6 grid">
      <div
        className="flex items-center justify-center w-[600px] h-[50] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
      >
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {/* Mostrar la imagen previa si existe */}
            {previewImage && (
              <img
                src={previewImage as string}
                alt="Preview Image"
                className="mb-3 max-h-[170px]"
              />
            )}
            {/* SVG de upload */}
            {!previewImage && (
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            )}
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Haz click para subir</span> o arrastra y suelta aquí.
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          {/* Input para seleccionar archivo */}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*" // Solo aceptar archivos de tipo imagen
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="grid grid-cols-2 pt-2 gap-4">
        <Button
          variant="contained"
          endIcon={<DeleteIcon />}
          color="error"
          onClick={() => setPreviewImage(null)}
        >
          Eliminar
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          color="secondary"
          onClick={handleSendImage}
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default ImageSelector2;

