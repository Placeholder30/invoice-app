import styled from "styled-components";

function CreateInvoice({ input, setInput, setSubmit, setInvoice }) {
  return (
    <Container>
      <form>
        <div className="bill">Bill From</div>
        <label>
          Street Address
          <input
            type="text"
            placeholder="15 iweka road onitsha"
            name="userAddress"
            onChange={(e) => {
              setInput((state) => ({ ...state, userAddress: e.target.value }));
            }}
          />
        </label>
        <div className="group">
          <label>
            City
            <input
              className="city"
              type="text"
              placeholder="Onitsha"
              name="userCity"
              onChange={(e) => {
                setInput((state) => ({ ...state, userCity: e.target.value }));
              }}
            />
          </label>
          <label>
            Post Code
            <input
              className="post-code"
              type="text"
              placeholder="200007"
              name="userPostCode"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  userPostCode: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              placeholder="Nigeria"
              name="userCountry"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  userCountry: e.target.value,
                }));
              }}
            />
          </label>
        </div>

        <div className="bill">Bill To</div>
        <label>
          Client's Name
          <input
            type="text"
            placeholder="Chinedu Okafor"
            name="clientName"
            onChange={(e) => {
              setInput((state) => ({ ...state, clientName: e.target.value }));
            }}
          />
        </label>

        <label>
          Client's Email
          <input
            type="text"
            placeholder="chineduokafor@gmail.com"
            name="clientEmail"
            onChange={(e) => {
              setInput((state) => ({ ...state, clientEmail: e.target.value }));
            }}
          />
        </label>
        <label>
          Street Address
          <input
            type="text"
            placeholder="1/3 Pound road Aba"
            name="clientAddress"
            onChange={(e) => {
              setInput((state) => ({
                ...state,
                clientAddress: e.target.value,
              }));
            }}
          />
        </label>

        <div className="group">
          <label>
            City
            <input
              className="city"
              type="text"
              placeholder="Onitsha"
              name="clientCity"
              onChange={(e) => {
                setInput((state) => ({ ...state, clientCity: e.target.value }));
              }}
            />
          </label>
          <label>
            Post Code
            <input
              className="post-code"
              type="text"
              placeholder="200007"
              name="clientPostCode"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  clientPostCode: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              placeholder="Nigeria"
              name="clientCountry"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  clientCountry: e.target.value,
                }));
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Invoice Date
            <input
              type="date"
              defaultValue="2021-01-01"
              name="invoiceDate"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  invoiceDate: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Payment Terms
            <select
              name="paymentTerms"
              onChange={(e) => {
                setInput((state) => ({
                  ...state,
                  paymentTerms: e.target.value,
                }));
              }}
            >
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
          <input
            type="text"
            placeholder="Project Description"
            name="projectDescription"
            onChange={(e) => {
              setInput((state) => ({
                ...state,
                paymentDescription: e.target.value,
              }));
            }}
          />
        </label>
        <label>
          Item List
          <div className="item-list">
            <label>
              Item Name{" "}
              <input
                type="text"
                name="itemName"
                onChange={(e) => {
                  setInput((state) => ({ ...state, itemName: e.target.value }));
                }}
              />
            </label>
            <label>
              Qty
              <input
                type="text"
                name="itemQty"
                onChange={(e) => {
                  setInput((state) => ({ ...state, itemQty: e.target.value }));
                }}
              />
            </label>
            <label>
              Price
              <input
                type="text"
                name="itemPrice"
                onChange={(e) => {
                  setInput((state) => ({
                    ...state,
                    itemPrice: e.target.value,
                  }));
                }}
              />
            </label>
            <div className="total">Total</div>
          </div>
        </label>
        <div className="add-item">+Add New Item</div>

        <div
          className="submit"
          onClick={() => {
            if (Object.entries(input).length !== 0) {
              setInvoice((state) => [...state, input]);
              setSubmit(true);
            }
          }}
        >
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
  margin: 3rem auto;

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
  .bill {
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
    &:hover {
      cursor: pointer;
    }
  }
`;

export default CreateInvoice;
