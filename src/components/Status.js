import { Row, Col, Checkbox } from "antd";
import { useFormikContext } from "formik";
import React, { useState } from "react";
import "antd/dist/antd.css";

import Styled from "./Styled";
const Status = (props) => {
  const { setFieldValue } = useFormikContext();
  const [option, setOption] = useState("");

  function onChange(values) {
    const valuesNew = values.filter((v) => v !== option);
    const value = valuesNew.length ? valuesNew[0] : "";
    setOption(value);
    setFieldValue("Status", value);
    console.log("checked = ", valuesNew);
  }
  const options = [
    { label: "Active", value: "Active" },
    { label: "InActive", value: "InActive" },
    { label: "Disconnected", value: "Disconnected" },
  ];
  return (
    <div>
      <Row>
        <Col span={24}>
          {" "}
          <label htmlFor="Status">
            Status <sup>*</sup>
          </label>
        </Col>
      </Row>
      <Styled>
        <Checkbox.Group
          options={options}
          value={[option]}
          name="Status"
          onChange={onChange}
        />
      </Styled>
    </div>
  );
};

export default Status;
