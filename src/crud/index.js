import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";
import Formulir from "./Formulir";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananTidakDiPilih = this.state.makanans.filter((makanan) => makanan.id !== this.state.id).map((filterMakanan) => filterMakanan);

      this.setState({
        makanans: [
          ...makananTidakDiPilih,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const makananDiPilih = this.state.makanans.filter((makanan) => makanan.id === id).map((filterMakanan) => filterMakanan);

    this.setState({
      nama: makananDiPilih[0].nama,
      deskripsi: makananDiPilih[0].deskripsi,
      harga: makananDiPilih[0].harga,
      id: makananDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans.filter((makanan) => makanan.id !== id).map((filterMakanan) => filterMakanan);

    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container" style={{ maxWidth: "800px" }}>
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
