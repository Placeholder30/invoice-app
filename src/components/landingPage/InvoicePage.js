import React from "react";
import styled from "styled-components";
import Header from "./Header";
import InvoiceCard from "./InvoiceCard";

function InvoicePage({ input, submit, invoice }) {
  return (
    <Container>
      <Header />
      {submit && (
        <InvoiceCard input={input} submit={submit} invoice={invoice} />
      )}
    </Container>
  );
}

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

export default InvoicePage;
