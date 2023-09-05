import { Row, Col, Form, Button } from "react-bootstrap";

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4 className="mt-4">{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="teks" name="nama" value={nama} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" cols="3" name="deskripsi" value={deskripsi} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" value={harga} onChange={(e) => handleChange(e)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
