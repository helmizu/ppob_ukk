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

import { thead, tbody, bulan } from "variables/penggunaan";

class Penggunaan extends React.Component {
  constructor() {
    super();
    this.state = {
      pelanggan: "",
      bulan: "",
      tahun: new Date().getFullYear(),
      meter_awal: "",
      meter_akhir: ""
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
      pelanggan: this.state.pelanggan,
      bulan: this.state.bulan,
      tahun: this.state.tahun,
      meter_awal: this.state.meter_awal,
      meter_akhir: this.state.meter_akhir
    };
    console.log(data);
    this.emptyForm();
  };

  emptyForm = () => {
    this.setState({
      meter_awal: "",
      meter_akhir: ""
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
                  <CardTitle tag="h4">
                    Tambahkan Penggunaan dan Tagihan Pelanggan
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <form onSubmit={this.onSubmit}>
                    <FormInputs
                      ncols={[
                        "col-md-6 pr-1",
                        "col-md-3 px-1",
                        "col-md-3 pl-1"
                      ]}
                      proprieties={[
                        {
                          label: "Nama",
                          inputProps: {
                            type: "select",
                            placeholder: "pilih pelanggan",
                            name: "pelanggan",
                            onChange: this.onChange,
                            value: this.state.pelanggan
                          },
                          option: [
                            {
                              value: "",
                              name: "pelanggan",
                              label: "pilih pelanggan",
                              disabled: true,
                              selected: true
                            },
                            {
                              value: "1",
                              name: "pelanggan",
                              label: "Helmi Zulfikar"
                            }
                          ]
                        },
                        {
                          label: "Bulan",
                          inputProps: {
                            type: "select",
                            placeholder: "pilih bulan",
                            name: "bulan",
                            onChange: this.onChange,
                            defaultValue: this.state.bulan
                          },
                          option: bulan
                        },
                        {
                          label: "Tahun",
                          inputProps: {
                            type: "number",
                            placeholder: new Date().getFullYear(),
                            min: new Date().getFullYear(),
                            onChange: this.onChange,
                            value: this.state.tahun
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "Meter Awal",
                          inputProps: {
                            type: "number",
                            placeholder: "0",
                            name: "meter_awal",
                            min: "0",
                            onChange: this.onChange,
                            value: this.state.meter_awal
                          }
                        },
                        {
                          label: "Meter Akhir",
                          inputProps: {
                            type: "number",
                            placeholder: "1000",
                            name: "meter_akhir",
                            min: this.state.meter_awal,
                            onChange: this.onChange,
                            value: this.state.meter_akhir
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
                  <CardTitle tag="h4">Simple Table</CardTitle>
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

export default Penggunaan;
