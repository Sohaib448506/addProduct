import React from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { Input, Row, Col, Select } from "antd";
import * as Yup from "yup";
const PricingInfo = () => {
  const { Option } = Select;
  const { setFieldValue, handleChange, handleBlur } = useFormikContext();
  return (
    <Row gutter={16}>
      <Col span={8}>
        <label htmlFor="Cost">
          Cost<sup>*</sup>
        </label>
        <Input
          id="Cost"
          name="Cost"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <ErrorMessage name="Cost" />
      </Col>

      <Col span={8}>
        <label htmlFor="Margin">
          Margin<sup>*</sup>
        </label>
        <Row>
          <Col span={18}>
            {" "}
            <Input
              id="Margin"
              name="Margin"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Col>

          <Col span={4}>
            {" "}
            <Select
              defaultValue="$"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="$">$</Option>
              <Option value="%">%</Option>
            </Select>
          </Col>
          <ErrorMessage name="Margin" />
        </Row>
      </Col>

      <Col span={8}>
        <label htmlFor="Price">
          Price($)<sup>*</sup>
        </label>
        <Input
          id="Price"
          name="Price"
          type="Price"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage name="Price" />
      </Col>
    </Row>
  );
};

export default PricingInfo;
