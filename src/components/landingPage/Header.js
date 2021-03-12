import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Heading>
      <div className="left">
        <div className="title">Invoices</div>
        <div className="invoice-no">There are 7 invoices</div>
      </div>
      <div className="right">
        <div className="filter">
          <p>Filter by status</p>
          <select name="" id="">
            <option value="all">All</option>
            <option value="no">Paid</option>
            <option value="yes">Pending</option>
          </select>
        </div>
        <div className="new-invoice"> New Invoice</div>
      </div>
    </Heading>
  );
}

export default Header;

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  padding-top: 20px;
  margin-bottom: 5rem;
  .title {
    font-size: 2.7rem;
    margin-bottom: 0.5rem;
  }
  .invoice-no {
    font-size: 1.4rem;
    opacity: 0.7;
  }
  .right {
    width: 35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
  }
  .filter {
    display: flex;
  }
  select {
    color: white;
    background-color: #222;
    margin-left: 2.4rem;
    border-radius: 0.3rem;
    height: 3rem;
    align-self: center;
  }

  .new-invoice {
    width: 10rem;
    padding: 1rem;
    border: 1px solid #6a1b9a;
    border-radius: 1.6rem;
    background-color: #6a1b9a;
    text-align: center;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
