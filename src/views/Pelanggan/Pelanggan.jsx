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

import { thead, tbody } from "variables/pelanggan";

class Pelanggan extends React.Component {
  constructor() {
    super();
    this.state = {
      nama: "",
      alamat: "",
      username: "",
      password: "",
      no_meter: "",
      id_tarif: ""
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
      nama: this.state.nama,
      alamat: this.state.alamat,
      username: this.state.username,
      password: this.state.password,
      no_meter: this.state.no_meter,
      id_tarif: this.state.id_tarif
    };
    console.log(data);
    this.emptyForm();
  };

  emptyForm = () => {
    this.setState({
      nama: "",
      alamat: "",
      username: "",
      password: "",
      no_meter: ""
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
                  <CardTitle tag="h4">Daftarkan Pelanggan</CardTitle>
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
                            type: "text",
                            placeholder: "Creative Code Inc.",
                            name: "nama",
                            onChange: this.onChange,
                            value: this.state.nama
                          }
                        },
                        {
                          label: "Username",
                          inputProps: {
                            type: "text",
                            placeholder: "michael23",
                            name: "username",
                            onChange: this.onChange,
                            value: this.state.username
                          }
                        },
                        {
                          label: "Password",
                          inputProps: {
                            type: "password",
                            placeholder: "·······",
                            name: "password",
                            onChange: this.onChange,
                            value: this.state.password
                          }
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6 pr-1", "col-md-6 pl-1"]}
                      proprieties={[
                        {
                          label: "Nomor Meter",
                          inputProps: {
                            type: "number",
                            placeholder: "-------",
                            name: "no_meter",
                            onChange: this.onChange,
                            value: this.state.no_meter
                          }
                        },
                        {
                          label: "Daya",
                          inputProps: {
                            type: "select",
                            placeholder: "Pilih Daya",
                            name: "id_tarif",
                            onChange: this.onChange,
                            value: this.state.id_tarif
                          },
                          option: [
                            {
                              value: "",
                              name: "id_tarif",
                              label: "pilih daya",
                              disabled: true,
                              selected: true
                            },
                            {
                              value: "1",
                              name: "id_tarif",
                              label: "400 / 10000"
                            }
                          ]
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Alamat",
                          inputProps: {
                            type: "textarea",
                            rows: "3",
                            cols: "80",
                            placeholder:
                              "Jl. Danau Ranau no 1, Sawojajar, Kota Malang",
                            name: "alamat",
                            onChange: this.onChange,
                            value: this.state.alamat
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
                  <CardTitle tag="h4">Tabel Pelanggan</CardTitle>
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

export default Pelanggan;
