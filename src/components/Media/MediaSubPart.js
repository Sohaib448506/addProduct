import React from "react";
import { Button } from "antd";
import { Upload, message } from "antd";
import { useFormikContext } from "formik";
import { Input } from "antd";
import "./MediaSubPart.css";
import { useState } from "react";
import storage from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const MediaSubPart = () => {
  const [videoStatus, setVideoStatus] = useState(false);
  const [youtubeStatus, setYoutubeStatus] = useState(false);
  const videoHandler = () => {
    setVideoStatus(true);
    setYoutubeStatus(false);
  };
  const youtubeHandler = () => {
    setYoutubeStatus(true);
    setVideoStatus(false);
  };
  const { setFieldValue, values, handleChange } = useFormikContext();

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    accept: ".mkv, .mp4",

    onChange(info) {
      const status = info.file;
      setFieldValue("video", status);

      const storageRef = ref(storage, `/khub-product/${info.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, info.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(
              "🚀 ~ file: App.js ~ line 43 ~ getDownloadURL ~ url",
              url
            );
          });
        }
      );
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div>
      <div className="Media_SubPart_Button">
        <Button onClick={videoHandler}>Video</Button>
        <Button onClick={youtubeHandler}>Youtube Link</Button>
      </div>
      {videoStatus && (
        <div>
          <Dragger {...props} maxCount={6}>
            <p className="ant-upload-text">
              Click or drag Video to this area to upload
            </p>
          </Dragger>
        </div>
      )}
      {youtubeStatus && (
        <div>
          <Input
            placeholder="Enter Youtube Link"
            name="youtubeLink"
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};

export default MediaSubPart;
