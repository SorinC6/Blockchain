import React, { useEffect } from "react";
import axios from "axios";

const Transactions = () => {
  useEffect(() => {
    var config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get("http://localhost:5000/mine", config)
      .then(res => {
        debugger;
      })
      .catch(err => {
        debugger;
      });
  }, []);
  return (
    <div>
      <p>Transactions</p>
    </div>
  );
};

export default Transactions;
