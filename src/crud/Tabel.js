import React from "react";
import { Table } from "react-bootstrap";

const Tabel = ({ makanans, editData, hapusData }) => {
  return (
    <Table striped bordered hover className="mt-5 ">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>Rp {makanan.harga}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => editData(makanan.id)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => hapusData(makanan.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tabel;
