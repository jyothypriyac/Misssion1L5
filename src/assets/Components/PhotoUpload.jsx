import styles from "./PhotoUpload.module.css";
import React, { useEffect, useState } from "react";

export default function PhotoUpload() {
  const [fileContent, setFile] = useState();
  const [carPrediction, setCarPrediction] = useState();

  const fetchVehicleData = () => {
    console.log("fetchVehicleData");

    const myHeaders = new Headers();
    myHeaders.append("Prediction-Key", "48db1bc8db5a442fa54d319c0c43ba54");
    myHeaders.append("Content-Type", "application/octet-stream");

    const file = fileContent;

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: file,
      redirect: "follow",
    };
// ==Fetch data API==//
    fetch(
      "https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/67d4c9e5-c3d2-4a0b-ad09-359133f1919f/classify/iterations/Iteration3/image",
      requestOptions
    )
      .then((response) => response.json())
      .then((jsondata) => setCarPrediction(jsondata));
  };

  //==condition for not null value==//
  let prediction = null;
  let probability = null;
  if (carPrediction != null) {
    prediction = carPrediction.predictions[0].tagName;
    probability = carPrediction.predictions[0].probability*100;
    console.log(carPrediction.predictions[0].tagName);
  }

  const changeHandler = (event) => {
    const f = event.target.files[0];
    console.log(f);
    const reader = new FileReader();
    reader.onload = (eventOnLoad) => {
      setFile(eventOnLoad.target.result);
    };

    reader.readAsArrayBuffer(f);
  };

  return (
    <div>
      <div className={styles.insurance}>
        <h1>Best online car insurance</h1>
        <h3>"made for the people of New Zealand"</h3>
        <p>
          Click on the "choose file" button to upload an image of your car:
        </p>

        <p>Supported file formats:- jpeg, png</p>
        <input
          type="file"
          onChange={changeHandler}
          id="myFile"
          name="Upload Image"
        />
        <button onClick={fetchVehicleData}>Upload </button>
        <div className={styles.popUp}
          
        >
          {prediction != null ? (
            <div className={styles.prediction}><br />
              
              <div>{"Car Type:        🚘 " +prediction} </div><br />
              <div>{"Prediction Accuracy: "+probability.toFixed(2)} % </div><br />
             <button>Get free Online Quote</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
