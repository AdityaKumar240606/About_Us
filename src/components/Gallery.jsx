// import { useState } from "react";
// import { motion } from "framer-motion";
// import "./Gallery.css";

// const images = [
//   "/Gallery/Gallery1.jpg",
//   "/Gallery/Gallery2.jpg",
//   "/Gallery/Gallery3.jpg",
//   "/Gallery/Gallery4.jpg"
// ];

// export default function Gallery() {
//   const [modalImg, setModalImg] = useState(null);

//   return (
//     <div className="gallery-root">
//       {images.map((src, idx) => (
//         <motion.div
//           key={idx}
//           className="gallery-item"
//           onClick={() => setModalImg(src)}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay: idx * 0.3 }}
//         >
//           <motion.img
//             src={src}
//             alt={`Gallery ${idx}`}
//             className="gallery-img"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           />
//         </motion.div>
//       ))}

//       {modalImg && (
//         <div className="gallery-modal" onClick={() => setModalImg(null)}>
//           <img src={modalImg} alt="Modal" className="modal-img" />
//         </div>
//       )}
//     </div>
//   );
// }




import { useEffect } from "react";
import baguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";
import "./Gallery.css";


const images = [
  "/Gallery/Gallery1.jpg",
  "/Gallery/Gallery2.jpg",
  "/Gallery/Gallery3.jpg",
  "/Gallery/Gallery4.jpg",
  "/Gallery/Gallery5.jpg",
  "/Gallery/Gallery6.jpg",
  "/Gallery/Gallery7.jpg",
  "/Gallery/Gallery8.jpg",
  "/Gallery/Gallery9.jpg"
];

export default function Gallery() {
  useEffect(() => {
    baguetteBox.run(".gallery"); // 👈 Initialize when component mounts
  }, []);

  return (
    <div className="gallery baguetteBoxOne">
      {images.map((src, idx) => (
        <a href={src} key={idx}>
          <img src={src} alt={`Gallery ${idx}`} style={{ width: "400px", margin: "10px" }} />
        </a>
      ))}
    </div>
  );
}
