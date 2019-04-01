import React, { Component } from 'react'
import axios from 'axios'

class Client extends Component {
    constructor() {
        super();
        this.state = {
            username : '',
            password : '',
            bukti_pembayaran : '',
            tanggal_pembayaran : '',
            id_tagihan : ''
        };
    
        this.fileSelect = this.fileSelect.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    fileSelect = e => {
        this.setState({
        [e.target.name] : e.target.files[0]
        })
    }
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        if (this.state.bukti_pembayaran.name) {
            formData.append('bukti_pembayaran', this.state.bukti_pembayaran, this.state.bukti_pembayaran.name)
        }
        formData.append('tanggal_pembayaran', this.state.tanggal_pembayaran)
        console.log(this.state)
        axios.post(`http://localhost:7000/data/pembayaran/${this.state.id_tagihan}`, formData)
    }
  render() {
    return (
      <div className="bg-all">
            <nav className="navbar navbar-light navbar-client">
                <a className="navbar-brand mr-auto text-white" href="#">P L N</a>
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="btn btn-login" href="#">Daftar</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-lg-7 height-full bg-home">
                        <div className="card card-costum">
                            <img src="/LogoPLN.png" width="200" height="200" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-5 login height-full">
                        <h3 className="text-head">Perusahaan Listrik Negara</h3>
                        <h5 className="font-grey text-subhead">Selamat Datang, Silahkan masuk ke akun Anda !</h5>
                        <form className="form-login">
                            <div className="wrap-input">
                                <label htmlFor="username" className="label-input">Username</label>
                                <input className="form-control form-input" type="text" name="username" id="username"  onChange={this.onChange} value={this.state.username}/>
                            </div>
                            <div className="wrap-input">
                                <label htmlFor="password" className="label-input">Password</label>
                                <input className="form-control form-input" type="password" name="password" id="password" onChange={this.onChange} value={this.state.password}/>
                            </div>
                            <div className="wrap-button">
                                <button type="submit" className="btn btn-login mt-4">Login</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5 height-full">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card wrap-head mb-4 border-left-color-blue">
                            <h6>Tagihan</h6>
                        </div>
                        <div className="wrap-content mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">April 2019</h5>
                                    <p className="card-text">
                                        <div className="table-responsive">
                                            <table className="table table-tagihan">
                                                <tbody>
                                                    <tr>
                                                        <td>Jumlah Meter</td>
                                                        <td>2000 KWH</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Biaya Tagihan</td>
                                                        <td>Rp 50000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Biaya Admin</td>
                                                        <td>Rp 250</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <th>Rp 50250</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </p>
                                    <a href="#" className="btn btn-block btn-primary">Bayar</a>                            
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">April 2019</h5>
                                    <form className="mt-4" encType="multipart/form-data" onSubmit={this.onSubmit}>
                                        <div className="wrap-input-full border-left-color-blue">
                                            <label htmlFor="tanggal" className="label-input">Tanggal Bayar</label>
                                            <input className="form-control form-input" type="date" name="tanggal_pembayaran" onChange={this.onChange}/>
                                        </div>
                                        <div className="wrap-input-full border-left-color-blue">
                                            <label className="label-input">Bukti Transfer</label>
                                            <input type="file" className="form-control-file" name="bukti_pembayaran" onChange={this.fileSelect}/>  
                                        </div>
                                        <button type="submit" className="btn btn-block btn-primary mt-3">Submit</button>                            
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card wrap-head mb-4 border-left-color-yellow">
                            <h6>Pending</h6>
                        </div>
                        <div className="wrap-content mb-5">
                        <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">April 2019</h5>
                                    <p className="card-text">
                                        <div className="table-responsive">
                                            <table className="table table-tagihan">
                                                <tbody>
                                                    <tr>
                                                        <td>Jumlah Meter</td>
                                                        <td>2000 KWH</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Biaya Tagihan</td>
                                                        <td>Rp 50000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Biaya Admin</td>
                                                        <td>Rp 250</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <th>Rp 50250</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </p>
                                    <span className="btn btn-block btn-warning">Pending</span>                            
                                </div>
                            </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card wrap-head mb-4 border-left-color-green">
                        <h6>Lunas</h6>
                    </div>
                    <div className="wrap-content mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Januari 2019</h5>
                                <p className="card-text">
                                    <div className="table-responsive">
                                        <table className="table table-tagihan">
                                            <tbody>
                                                <tr>
                                                    <td>Jumlah Meter</td>
                                                    <td>2000 KWH</td>
                                                </tr>
                                                <tr>
                                                    <td>Biaya Tagihan</td>
                                                    <td>Rp 50000</td>
                                                </tr>
                                                <tr>
                                                    <td>Biaya Admin</td>
                                                    <td>Rp 250</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <th>Rp 50250</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </p>
                                <span className="btn btn-block btn-success">Lunas</span>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className="card wrap-head mb-4 border-left-color-red">
                        <h6>Gagal</h6>
                    </div>
                    <div className="wrap-content mb-5">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Februari 2019</h5>
                                <p className="card-text">
                                    <div className="table-responsive">
                                        <table className="table table-tagihan">
                                            <tbody>
                                                <tr>
                                                    <td>Jumlah Meter</td>
                                                    <td>2000 KWH</td>
                                                </tr>
                                                <tr>
                                                    <td>Biaya Tagihan</td>
                                                    <td>Rp 50000</td>
                                                </tr>
                                                <tr>
                                                    <td>Biaya Admin</td>
                                                    <td>Rp 250</td>
                                                </tr>
                                                <tr>
                                                    <th>Total</th>
                                                    <th>Rp 50250</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </p>
                                <span className="btn btn-block btn-danger">Bayar Ulang</span>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </div>
    )
  }
}

export default Client