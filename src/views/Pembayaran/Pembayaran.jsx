import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import { PanelHeader } from "components";

import { thead, tbody, theadPaid, tbodyPaid } from "variables/pembayaran";

class Pembayaran extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pembayaran Pending</CardTitle>
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
                                        className="now-ui-icons ui-1_check text-warning pr-2 cursor-pointer"
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
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pembayaran Sukses</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-success">
                      <tr>
                        {theadPaid.map((prop, key) => {
                          if (key === theadPaid.length - 1)
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
                      {tbodyPaid.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === theadPaid.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
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
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Pembayaran Gagal</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-danger">
                      <tr>
                        {theadPaid.map((prop, key) => {
                          if (key === theadPaid.length - 1)
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
                      {tbodyPaid.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.data.map((prop, key) => {
                              if (key === theadPaid.length - 1)
                                return (
                                  <td key={key} className="text-right">
                                    {prop}
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

export default Pembayaran;
