import React from "react";
import styled from "styled-components";
import Header from "./Header";
import InvoiceCard from "./InvoiceCard";

function InvoicePage() {
  return (
    <Container>
      <Header />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </Container>
  );
}

export const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
`;

export default InvoicePage;
