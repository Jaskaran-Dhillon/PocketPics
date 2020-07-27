import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer"
import Header from "./Header"
import image from './Placeholder.png'

function SubmitArea(props){
  const [images, setImg] = useState([]);
  var temp_img = "";

     function addImg(newImg) {
      setImg(prevImgs => {
        return [...prevImgs, newImg];
      });
    }

    function deleteImage(id) {
      setImg(prevImgs => {
        return prevImgs.filter((imgItem, index) => {
          return index !== id;
        });
      });
    }

    function submit(event)
    {
      if (temp_img==="")
    {
        alert("Blank submissions are not allowed.");

        return;

    }
    addImg(temp_img);
      document.getElementById("container").src=image;
      event.preventDefault();

    }

    document.onpaste = function(pasteEvent) {
      var item = pasteEvent.clipboardData.items[0];

      if (item.type.indexOf("image") === 0) {
        var blob = item.getAsFile();

        var reader = new FileReader();
        reader.onload = function(event) {
        temp_img = event.target.result;

        document.getElementById("container").src = event.target.result;
        };
        reader.readAsDataURL(blob);
      }
    }

return(
  <div>
  <Header />
  <div className="upload">
  <h3>Paste image in box below</h3>
  <img className ="preview" id="container" src={image} alt=""/>
  </div>
  <div className="upload">
    <button onClick={submit}>Submit</button>
    </div>
  <p className="imglist">
  {images.map((img_src, index) => {
          return (
            <Card
              key={index}
              id={index}
              src={img_src}
              Delete={deleteImage}
            />
          );
        })}
  </p>
  <Footer />
  </div>
);}

export default SubmitArea ;
