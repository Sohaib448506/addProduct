import "./App.css";
import { Button } from "antd";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import StockInformation from "./components/StockInformation/StockInformation";
import Detail from "./components/Detail";
import PricingInfo from "./components/PricingInfo/PricingInfo";
import MyCkeditor from "./components/Description/Description";
import Media from "./components/Media/Media";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitAction } from "./redux-store/index";
const { Panel } = Collapse;

function App() {
  const dispatch = useDispatch();
  // const storedData = useSelector((state) => console.log(state.values));
  const onSubmitfirebasehandler = async (values) => {
    const dataSending = await fetch(
      "https://khub-firebase-form-default-rtdb.firebaseio.com/Product.json",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await dataSending.json();

    dispatch(submitAction.ProductData(data));
  };

  const initialValues = {
    username: "",
    SKU: "",
    MLC: "",
    Brand: "",
    globalTradeNumber: "",
    UPC: "",
    Weight: "",
    weightlabel: "kg",
    enterTags: "",
    suppliers: "",
    Groups: "false",
    Online: "false",
    Featured: "false",
    Status: "",
    Cost: "",
    Margin: "",
    Price: "",

    data: {
      tableHead: [
        { id: 1, th: "Sr No." },
        { id: 2, th: "Warahouses/Storefont" },
        { id: 3, th: "In Hand Qty" },
        { id: 4, th: "On Hand Qty" },
        { id: 5, th: "Damaged Qty" },
        { id: 6, th: "Minimum Qty" },
        { id: 7, th: "Maximum Qty" },
      ],
      tableBody: [
        {
          id: 1,
          tbtitle: "Elite Store",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
        {
          id: 2,
          tbtitle: "Universal Warehouse",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
        {
          id: 3,
          tbtitle: "Big Warehouse",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
        {
          id: 4,
          tbtitle: "Global",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
        {
          id: 5,
          tbtitle: "Local",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
        {
          id: 6,
          tbtitle: "Primary",
          placeHolder: [
            { id: 1, title: "In Hand Qty", value: 0 },
            { id: 2, title: "On Hand Qty", value: 0 },
            { id: 3, title: "Damaged Qty", value: 0 },
            { id: 4, title: "Minimum Qty", value: 0 },
            { id: 5, title: "Maximum Qty", value: 0 },
          ],
        },
      ],
    },
    description: "",

    pics: "",
    video: "",
    youtubeLink: "",
  };
  const onSubmit = (values) => {
    onSubmitfirebasehandler(values);
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Name is Required"),
    SKU: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("SKU is Required"),
    Brand: Yup.string().required("Brand Selection is Required"),
    Cost: Yup.number()
      .max(999999, "Must be 15 characters or less")
      .required("Cost is Required"),
    Margin: Yup.number()
      .max(15, "Must be 15 characters or less")
      .required("Margin is Required"),
    Price: Yup.number()
      .max(15, "Must be 15 characters or less")
      .required("Price is Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, handleSubmit, resetForm }) => {
        return (
          <Form>
            <Collapse
              bordered={false}
              defaultActiveKey={["1", "2", "3", "4", "5"]}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="Detail"
                key="1"
                className="site-collapse-custom-panel"
              >
                <Detail />
              </Panel>
              <Panel
                header="Stock Information"
                key="2"
                className="site-collapse-custom-panel"
              >
                <StockInformation />
              </Panel>
              <Panel
                header="Pricing Info"
                key="3"
                className="site-collapse-custom-panel"
              >
                <PricingInfo />
              </Panel>
              <Panel
                header="Description"
                key="4"
                className="site-collapse-custom-panel"
              >
                <MyCkeditor />
              </Panel>
              <Panel
                header="Media"
                key="5"
                className="site-collapse-custom-panel"
              >
                <Media />
              </Panel>
            </Collapse>
            <div className="Form-End">
              <Button type="primary" onClick={handleSubmit}>
                Save
              </Button>
              <Button>Cancel</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default App;
