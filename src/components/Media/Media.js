import React from "react";
import { Upload, message } from "antd";
import { useFormikContext } from "formik";
import { InboxOutlined } from "@ant-design/icons";
import { shallowEqual, useSelector } from "react-redux";
import MediaSubPart from "./MediaSubPart";
import { useState, userEffect } from "react";
import storage from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { submitAction } from "../../redux-store";
const Media = () => {
  const { setFieldValue, values } = useFormikContext();
  //To Collect the list of downlioadable URL of uploaded pics
  const [theArray, setTheArray] = useState([]);

  // console.log(submitAction.ProductData(payload));
  const { currentState } = useSelector((state) => ({
    currentState: state.values,
  }));
  console.log(currentState);

  //Fetching data from firebase
  const dataFetchd = async () => {
    const dataSending = await fetch(
      "https://khub-firebase-form-default-rtdb.firebaseio.com/Product.json"
    );
    const data = await dataSending.json();
    console.log("🚀 ~ file: Media.js ~ line 28 ~ dataFetchd ~ data", data);
  };
  dataFetchd();
  const { Dragger } = Upload;

  const props = {
    name: "file",
    listType: "picture",
    accept: ".png,.jpg",

    onChange(info) {
      const status = info.fileList;
      setFieldValue("pics", status);
      const storageRef = ref(storage, `/khub-product/${info.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, info.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setTheArray([...theArray, url]);
            console.log(
              "🚀 ~ file: App.js ~ line 43 ~ getDownloadURL ~ url",
              url
            );
          });
        }
      );
      // if (status !== "uploading") {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === "done") {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === "error") {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
      // {
      //   uploadedPicsHandler(info.list);
      // }
    },
  };
  return (
    <div>
      <Dragger {...props} maxCount={6}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">Upload Upto 6 images</p>
      </Dragger>
      <MediaSubPart />
    </div>
  );
};

export default Media;
