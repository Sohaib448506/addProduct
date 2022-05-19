import { React } from "react";
import "./StockInformation.css";
import { useFormikContext } from "formik";
import { Input } from "antd";
const StockInformation = () => {
  const { values, setFieldValue } = useFormikContext();

  const { data } = values;
  // console.log(
  //   "🚀 ~ file: StockInformation.js ~ line 9 ~ StockInformation ~ data",
  //   data.tableBody
  // );

  return (
    <div className="stockTable">
      <table>
        <thead>
          <tr>
            {data.tableHead.map((items) => (
              <th key={items.id}>{items.th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.tableBody.map((items, idx) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.tbtitle}</td>
              {/* {console.log(data.placeHolder)} */}
              {items.placeHolder.map((i, index) => (
                <td key={i.id}>
                  <Input
                    placeholder={i.title}
                    defaultValue={i.value}
                    onChange={(value) => {
                      const changedValue = parseInt(
                        value.nativeEvent.target.value
                      );
                      // console.log(
                      //   "🚀 ~ file: StockInformation.js ~ line 47 ~StockInformation ~ i",
                      //   items
                      // );
                      setFieldValue(
                        `data.tableBody[${idx}].placeHolder[${index}].value`,
                        changedValue
                      );
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockInformation;
