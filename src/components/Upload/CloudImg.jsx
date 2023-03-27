import React, { useState } from "react";
import { imgUpload } from "../../Utilities/imageUpload";
import "./cloud.css";
import Img from "../ProposalForm/Img";

const CloudImg = () => {
  const [file, setFile] = useState([]);
  const [imgdata, setImgdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let arr = [];
      for (let i = 0; i < file.length; i++) {
        const data = await imgUpload(file[i]);
        arr.push(data);
      }
      setImgdata([...arr]);
      setLoading(false);
      setFile([]);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <div>
      <form>
        <input
          type="file"
          multiple={true}
          onChange={(e) => {
            setFile(e.target.files);
          }}
        />
        <button disabled={loading} onClick={submitHandler}>
          {loading ? "Loading..." : "Add"}
        </button>
      </form>
      {imgdata && (
        <div className="space">
          {imgdata.map((data) => {
            return <Img key={data.url} {...data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CloudImg;
