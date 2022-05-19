import React, { useState, useEffect } from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
// import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Field, useFormikContext } from "formik";
import h2p from "html2plaintext";

const MyCkeditor = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    let description = h2p(values.description);
  }, [values.description]);
  return (
    <div>
      <CKEditor
        editor={Editor}
        onChange={(event, editor) => {
          setFieldValue("description", editor.getData());
          let descriptionWords = editor.getData();
          let description = h2p(descriptionWords);
        }}
      />
    </div>
  );
};

export default MyCkeditor;
