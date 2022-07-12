import React from "react";
import { Container, Label, Input, FormGroup, Row, Col } from "reactstrap";

const FiltersComponent = ({ listFilters, setListFilters }) => {
  return (
    <>
      <Container>
        <div className="background-container pt-4 pb-4 pl-3 pr-3 mb-2">
          <FormGroup>
            <Label>Search Expenses</Label>
            <Input
              value={listFilters.input}
              onChange={(e) =>
                setListFilters({ ...listFilters, input: e.target.value })
              }
              placeholder="e.g Name, description, status"
            />
          </FormGroup>
          <p>Filter Your Expenses</p>
          <Row>
            <Col xs="12" sm="4" md="5">
              <FormGroup>
                <Label>Filter By Status</Label>
                <p style={{ visibility: "hidden" }}>kfdkkgkkg</p>
                <Input
                  type="select"
                  value={listFilters.status}
                  onChange={(e) =>
                    setListFilters({
                      ...listFilters,
                      status: e.target.value,
                    })
                  }
                  name="select"
                  className="form-control"
                >
                  <option value="">None</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" sm="8" md="7">
              <p>Filter By Cost.</p>
              <Row>
                <Col xs="12" sm="6">
                  <FormGroup>
                    <Label>Start Cost.</Label>
                    <Input
                      type="select"
                      className="form-control"
                      value={listFilters.startcost}
                      onChange={(e) =>
                        setListFilters({
                          ...listFilters,
                          startcost: e.target.value,
                        })
                      }
                    >
                      <option value={100}>100</option>
                      <option value={200}>200</option>
                      <option value={300}>300</option>
                      <option value={400}>400</option>
                      <option value={500}>500</option>
                      <option value={600}>700</option>
                      <option value={700}>700</option>
                      <option value={800}>800</option>
                      <option value={900}>900</option>
                      <option value={1000}>1000</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <FormGroup>
                    <Label>End Cost.</Label>
                    <Input
                      type="select"
                      name="enddate"
                      className="form-control"
                      value={listFilters.endcost}
                      onChange={(e) =>
                        setListFilters({
                          ...listFilters,
                          endcost: e.target.value,
                        })
                      }
                    >
                      <option value={100}>100</option>
                      <option value={200}>200</option>
                      <option value={300}>300</option>
                      <option value={400}>400</option>
                      <option value={500}>500</option>
                      <option value={600}>700</option>
                      <option value={700}>700</option>
                      <option value={800}>800</option>
                      <option value={900}>900</option>
                      <option value={1000}>1000</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default FiltersComponent;
