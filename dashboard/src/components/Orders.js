import React, { useEffect, useState } from "react";
import { clientServer } from "../axiosConfig/index.js";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([{
    mode: "",
    stockName: "",
    price: "",
    qty: ""
  }]);
  
  useEffect(() => {
    async function getOrders() {
      try {
        const resp = await clientServer.get('/orders');
  
        const formattedOrders = resp.data.map((ord) => ({
          mode: ord.mode,
          stockName: ord.name,
          price: ord.price,
          qty: ord.qty,
        }));
  
        setAllOrders(formattedOrders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    }
  
    getOrders(); 
  }, []);
  
  return (
    <>
    <h3 className="title">Orders ({allOrders.length})</h3>
    <div className="order-table">
        <table>
          <tr>
            <th>Mode</th>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        {allOrders.map((order,index)=>{
          return(
            <tr key={index}>
                <td>{order.mode}</td>
                <td>{order.stockName}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
              </tr>
          );
        })}
      </table>
  </div>
  </>
  );
};

export default Orders;
