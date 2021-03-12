import React from "react";
import styled from "styled-components";

function InvoiceCard() {
  return (
    <Card>
      <div className="invoice-id">#RT38$05</div>
      <div className="due-date">18th August, 2021</div>
      <div className="client">Adam Driver</div>
      <div className="amount">$15,000.90</div>
      <div className="payment-status">Paid</div>
    </Card>
  );
}

export default InvoiceCard;

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #32325a;
  color: white;
  height: 5rem;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
  padding: 1rem;
  font-size: 1.6rem;

  .payment-status {
    width: 6rem;
    padding: 1rem;
    color: green;
    border: 1px solid green;
    text-align: center;
    border-radius: 0.3rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
