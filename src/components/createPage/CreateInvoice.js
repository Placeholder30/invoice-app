import React from "react";
import styled from "styled-components";
function CreateInvoice() {
  return (
    <Container>
      <form>
        <div className="bill-from">Bill From</div>
        <label>
          Street Address
          <input type="text" placeholder="15 iweka road onitsha" />
        </label>
        <div className="group">
          <label>
            City
            <input className="city" type="text" placeholder="Onitsha" />
          </label>
          <label>
            Post Code
            <input className="post-code" type="text" placeholder="200007" />
          </label>
          <label>
            Country
            <input type="text" placeholder="Nigeria" />
          </label>
        </div>

        <div className="bill-to">Bill To</div>
        <label>
          Client's Name
          <input type="text" placeholder="Chinedu Okafor" />
        </label>

        <label>
          Client's Email
          <input type="text" placeholder="chineduokafor@gmail.com" />
        </label>
        <label>
          Street Address
          <input type="text" placeholder="1/3 Pound road Aba" />
        </label>

        <div className="group">
          <label>
            City
            <input className="city" type="text" placeholder="Onitsha" />
          </label>
          <label>
            Post Code
            <input className="post-code" type="text" placeholder="200007" />
          </label>
          <label>
            Country
            <input type="text" placeholder="Nigeria" />
          </label>
        </div>

        <div>
          <label>
            Invoice Date
            <input type="date" defaultValue="2021-01-01" />
          </label>
          <label>
            Payment Terms
            <select>
              <option selected value="7">
                Next 7 days
              </option>
              <option value="14">Next 14 days</option>
              <option value="21">Next 21 days</option>
              <option value="30">Next 30 days</option>
            </select>
          </label>
        </div>
        <label>
          Project Description
          <input type="text" placeholder="Project Description" />
        </label>
        <label>
          Item List
          <div className="item-list">
            <label>
              Item Name <input type="text" />
            </label>
            <label>
              Qty <input type="text" />
            </label>
            <label>
              Price <input type="text" />
            </label>
            <div className="total">Total</div>
          </div>
        </label>
        <div className="add-item">+Add New Item</div>

        <div className="submit">
          <div className="discard">Discard</div>
          <div className="save">Save & Send</div>
        </div>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 70vw;
  color: white;
  margin: 0 auto;
  label {
    display: block;
    font-size: 1.2rem;
  }
  input {
    display: block;
    width: 50%;
    color: white;
    padding: 0.6rem;
    background-color: #32325a;
    border-radius: 0.4rem;
    outline: none;
    border: solid #32325a;
    margin-bottom: 1rem;
    margin-top: 0.7rem;
  }
  .group {
    width: 50%;
    display: flex;
    padding: 0.6rem;
  }
  .bill-from {
    font-size: 1.5rem;
    color: #2e97ea;
  }
  .bill-to {
    font-size: 1.5rem;
    color: #2e97ea;
  }

  .item-list {
    display: flex;
    width: 50%;
  }
  select {
    display: block;
    background-color: #32325a;
    color: white;
    padding: 0.6rem;
    border-radius: 0.4rem;
  }
  .add-item {
    width: 50%;
    color: white;
    background-color: #32325a;
    border-radius: 1.6rem;
    font-size: 1.3rem;
    text-align: center;
    padding: 1.4rem;
    &:hover {
      cursor: pointer;
    }
  }
  .submit {
    margin-top: 1rem;
    width: 50%;
    display: flex;
    font-size: 1.3rem;
  }
  .discard {
    background-color: #32325a;
    width: 6rem;
    padding: 1.4rem;
    margin-right: 1rem;
    text-align: center;
    border-radius: 1.3rem;
  }
  .save {
    background-color: #6a1b9a;
    width: 10rem;
    padding: 1.2rem;
    text-align: center;
    border-radius: 1.3rem;
  }
`;

export default CreateInvoice;
