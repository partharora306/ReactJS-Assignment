import React, { useState } from "react";
import { test, categoryList } from "./Data";

const StockCheck = () => {
  const [selectedValue, setSelectedvalue] = useState("");
  const [checked, setChecked] = useState(false);

  const filteredData = test.filter(
    (data) => data.category === selectedValue || selectedValue === ""
  );
  return (
    <div>
      <h2>Welcome to Foodie Club</h2>
      <div>
        <select
          value={selectedValue}
          onChange={(e) => {
            setSelectedvalue(e.target.value);
          }}
        >
          {categoryList.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
      </div>
      <br></br>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />{" "}
        Show items only inStock items
      </label>
      {filteredData.map((data) => {
        return (
          <>
            <h6>{data.category}</h6>
            <div>
              {data.items
                .filter((item) => {
                  return item.inStock === checked || checked === false;
                })
                .map((item) => {
                  return (
                    <div>
                      {item.name} {item.price}
                    </div>
                  );
                })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default StockCheck;
