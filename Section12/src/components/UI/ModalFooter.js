import React, { Fragment } from "react";
import Classes from 'ModalFooter.module'

const ModalFooter = ({totalAmount}) => {
  return (
    <div>
      <div>
        <h2>Total Amount</h2>
        <h2>${totalAmount}</h2>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default ModalFooter;
