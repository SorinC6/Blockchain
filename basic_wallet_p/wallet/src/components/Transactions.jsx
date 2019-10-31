import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    var config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };
    axios
      .get("http://localhost:5000/chain", config)
      .then(res => {
        //console.log(res.data.chain);
        setTransactions(res.data.chain);
      })
      .catch(err => {
        debugger;
      });
  }, []);

  useEffect(() => {
    transactions.forEach(item => {
      if (item.transactions.length > 0) {
        console.log(item.transactions[0].amount);
        setAmount(amount + item.transactions[0].amount);
      }
    });
    //console.log(amount);
  }, [transactions]);
  return (
    <Root>
      <h1>Total amount of Coins: {amount}</h1>
      <p>Transactions Chain</p>
      {transactions &&
        transactions.map(item => {
          return (
            <Transaction>
              <p>Index: {item.index}</p>
              <p>Prev Hash: {item.previous_Hash}</p>
              <p>Proof: {item.proof}</p>
              {item.transactions.length > 0 &&
                item.transactions.map(tr => {
                  return (
                    <Info>
                      <p>Amount: {tr.amount}</p>
                      <p>Recipient: {tr.recipient}</p>
                      <p>Sender: {tr.sender}</p>
                    </Info>
                  );
                })}
            </Transaction>
          );
        })}
    </Root>
  );
};

export default Transactions;

const Root = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

const Transaction = styled.div`
  border: 1px solid black;
  width: 42%;
`;

const Info = styled.div`
  margin-left: 30px;
`;
