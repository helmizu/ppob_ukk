import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

import { PanelHeader, FormInputs } from "components";

import { thead, tbody } from "variables/tarif";

class RegularTables extends React.Component {
  constructor() {
    super();
    this.state = {
      daya: "",
      harga: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let data = {
      daya: this.state.daya,
      harga: this.state.harga
    };
    console.log(data);
    this.emptyForm();
  };

  emptyForm = () => {
    this.setState({
      daya: "",
      harga: ""
    });
  };

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tambahkan Tarif</CardTitle>
                </CardHeader>
                <CardBody>
                  <form onSubmit={this.onSubmit}>
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "Daya",
                          inputProps: {
                            type: "number",
                            placeholder: "200",
                            name: "daya",
                            onChange: this.onChange,
                            value: this.state.daya
                          }
                        },
                        {
                          label: "Harga",
                          inputProps: {
                            type: "number",
                            placeholder: "20000",
                            name: "harga",
                            onChange: this.onChange,
                            value: this.state.harga
                          }
                        }
                      ]}
                    />
                    <Button
                      type="submit"
                      className="btn-primary float-right mb-4"
                    >
                      Submit
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabel Tarif</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {thead.map((prop, key) => {
                          if (key === thead.length - 1)
                            return (
                              <th key={key} className="text-right">
                                {prop}
                              </th>
                            );
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tbody.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === thead.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    <a>
                                      <i
                                        className="now-ui-icons ui-1_simple-remove text-danger pr-2 cursor-pointer"
                                        onClick={() => prop}
                                      />
                                    </a>
                                  </td>
                                );
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default RegularTables;
