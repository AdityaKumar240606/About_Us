import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './App.css';

const App = () => {
  const gallery = useRef(null);

  const images = [
    { src: '/Gallery/Gallery1.jpg', thumb: '/Gallery/Gallery1.jpg', subHtml: '<h4>Gallery 1</h4>' },
    { src: '/Gallery/Gallery2.jpg', thumb: '/Gallery/Gallery2.jpg', subHtml: '<h4>Gallery 2</h4>' },
    { src: '/Gallery/Gallery3.jpg', thumb: '/Gallery/Gallery3.jpg', subHtml: '<h4>Gallery 3</h4>' },
    { src: '/Gallery/Gallery4.jpg', thumb: '/Gallery/Gallery4.jpg', subHtml: '<h4>Gallery 4</h4>' },
    { src: '/Gallery/Gallery5.jpg', thumb: '/Gallery/Gallery5.jpg', subHtml: '<h4>Gallery 5</h4>' },
    { src: '/Gallery/Gallery6.jpg', thumb: '/Gallery/Gallery6.jpg', subHtml: '<h4>Gallery 6</h4>' },
    { src: '/Gallery/Gallery7.jpg', thumb: '/Gallery/Gallery7.jpg', subHtml: '<h4>Gallery 7</h4>' },
    { src: '/Gallery/Gallery8.jpg', thumb: '/Gallery/Gallery8.jpg', subHtml: '<h4>Gallery 8</h4>' },
    { src: '/Gallery/Gallery9.jpg', thumb: '/Gallery/Gallery9.jpg', subHtml: '<h4>Gallery 9</h4>' },
  ];

  const openGallery = (index) => {
    gallery.current.openGallery(index);
  };

  return (
    <div className="shaurya-gallery">
      <h1 className="shaurya-title">Shaurya Gallery</h1>
      <div className="image-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.thumb}
            alt={`Gallery ${index + 1}`}
            className="grid-img"
            onClick={() => openGallery(index)}
          />
        ))}
      </div>

      <LightGallery
        onInit={ref => (gallery.current = ref.instance)}
        plugins={[lgZoom, lgThumbnail]}
        dynamic
        dynamicEl={images}
        thumbnail={true}
        zoom={true}
      />
    </div>
  );
};

export default App;
