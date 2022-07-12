import React from "react";
import { Container } from "reactstrap";

export const Header = () => {
  return (
    <>
      <section className="section section-shaped section-lg app-header">
        <div className="shape shape-style-1 bg-gradient-info">
          <Container>
            <h3
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "20px",
                marginTop: "3rem",
                background: "none",
              }}
            >
              Expensify
            </h3>
            <p
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "12px",
                background: "none",
              }}
            >
              Tracking your Expenses just got easier.
            </p>
          </Container>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    </>
  );
};

export default Header;
