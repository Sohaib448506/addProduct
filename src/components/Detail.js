import React from "react";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { Row, Col, Switch, Checkbox, Input } from "antd";
import Status from "./Status";
import { Select } from "antd";

const { Option } = Select;
const Detail = () => {
  const { setFieldValue, handleChange, handleBlur, values } =
    useFormikContext();

  return (
    <div>
      <Row gutter={10}>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="username">
                Name<sup>*</sup>
              </label>{" "}
              <Input
                id="username"
                name="username"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {/* <Field
                id="username"
                name="username"
                component={Input}
                onBlur={handleBlur}
                placeholder="Name"
              /> */}
            </Col>
            <ErrorMessage name="username" />
          </Row>
        </Col>
        <Col span={12}>
          {" "}
          <label htmlFor="SKU">
            SKU<sup>*</sup>
          </label>
          {/* <Field id="SKU" name="SKU" placeholder="SKU" /> */}
          <Input
            id="SKU"
            name="SKU"
            placeholder="SKU"
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
          <ErrorMessage name="SKU" />
          <Row gutter={10}>
            <Col span={4} offset={2}></Col>
            <Col span={16}>
              <Checkbox>Auto Generated SKU</Checkbox>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={8}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="MLC">MLC</label>
              <Input
                id="MLC"
                name="MLC"
                placeholder="Enter Manufacturer Lot Code"
                onChange={handleChange}
              />
              {/* <Field
                id="MLC"
                name="MLC"
                placeholder="Enter Manufacturer Lot Code"
              /> */}
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={10}>
            <label htmlFor="Brand">
              Select Brand<sup>*</sup>
            </label>
            <Col span={24}>
              {" "}
              {/* <Field as="select" name="Brand">
                <option value="jack">Outfitters</option>
                <option value="lucy">Levis</option>
                <option value="tom1">ChaseUp</option>
                <option value="jac">Jack</option>
                <option value="lucy1">Lucy</option>
                <option value="tom">Tom</option>
              </Field> */}
              <Select
                showSearch
                name="Brand"
                style={{ width: "100%" }}
                onChange={(event) => {
                  setFieldValue("Brand", event);
                }}
                placeholder="Select Brand"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                required
              >
                <Option value="jack">Outfitters</Option>
                <Option value="lucy">Levis</Option>
                <Option value="tom1">ChaseUp</Option>
                <Option value="jac">Jack</Option>
                <Option value="lucy1">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
              <ErrorMessage name="Brand" />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="BIN">BIN Code</label>
              {/* <Field id="BIN" name="BIN" placeholder="Enter BIN Code" /> */}
              <Input
                id="BIN"
                name="BIN"
                placeholder="Enter BIN Code"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={8}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="globalTradeNumber">Global Trade Number</label>
              {/* <Field
                id="globalTradeNumber"
                name="globalTradeNumber"
                placeholder="Enter Global Trade Number"
              /> */}
              <Input
                id="globalTradeNumber"
                name="globalTradeNumber"
                placeholder="Enter Global Trade Number"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="UPC">UPC</label>
              {/* <Field id="UPC" name="UPC" placeholder="Enter UPC" /> */}
              <Input
                id="UPC"
                name="UPC"
                placeholder="Enter UPC"
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="Weight">Weight</label>
              <Row>
                <Col span={21}>
                  {/* <Field id="Weight" name="Weight" placeholder="Enter Weight" /> */}
                  <Input
                    id="Weight"
                    name="Weight"
                    placeholder="Enter Weight"
                    onChange={handleChange}
                  />
                </Col>

                <Col span={2}>
                  {" "}
                  {/* <Field as="select" name="weightlabel">
                    <option value="kg">kg</option>
                    <option value="lb">lb</option>
                    <option value="g">g</option>
                  </Field> */}
                  <Select
                    labelInValue
                    defaultValue={{ value: "kg" }}
                    onChange={(event) => {
                      setFieldValue("weightlabel", event.label);
                    }}
                  >
                    <Option value="kg">kg</Option>
                    <Option value="lb">lb</Option>
                    <Option value="g">g</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="enterTags">Enter Tags</label>
              {/* <Field
                as="select"
                name="enterTags"
                id="enterTags"
                placeholder="Please Select one tag"
              >
                <option value="1" label="1">
                  1
                </option>
                <option value="2" label="2">
                  2
                </option>
                <option value="3" label="3">
                  3
                </option>
                <option value="4" label="4">
                  4
                </option>
              </Field> */}
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                name="enterTags"
                id="enterTags"
                placeholder="Please Select one tag"
                onChange={(event) => {
                  setFieldValue("enterTags", event);
                }}
                optionLabelProp="label"
              >
                <Option value="2" label="3">
                  <div className="demo-option-label-item">2 </div>
                </Option>
                <Option value="3" label="3">
                  <div className="demo-option-label-item">3</div>
                </Option>
              </Select>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={10}>
            <Col span={24}>
              {" "}
              <label htmlFor="suppliers">Select Suppliers</label>
              <Select
                showSearch
                labelInValue
                id="suppliers"
                name="suppliers"
                onChange={(event) => {
                  setFieldValue("suppliers", event.label);
                }}
                style={{ width: "100%" }}
                placeholder="Please Select Suppliers"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="ititans"> ititans</Option>
              </Select>
              {/* <Field as="select" name="suppliers" id="suppliers">
                <option value="ititans" label="ititans">
                  ititans
                </option>
              </Field> */}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          <Row gutter={10}>
            <Col>
              <Row gutter={10}>
                <Col span={24}>
                  {" "}
                  <label htmlFor="Groups">Groups</label>
                </Col>
                <Switch onChange={(value) => setFieldValue("Groups", value)} />
              </Row>
            </Col>
            <Col>
              <Row gutter={10}>
                <Col span={24}>
                  {" "}
                  <label htmlFor="Online">Online</label>
                </Col>
                <Switch onChange={(value) => setFieldValue("Online", value)} />
              </Row>
            </Col>
            <Col>
              <Row gutter={10}>
                <Col span={24}>
                  {" "}
                  <label htmlFor="Featured">Featured</label>
                </Col>
                <Switch
                  onChange={(value) => setFieldValue("Featured", value)}
                />
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Status />
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
