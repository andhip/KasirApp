import { Row, Col } from "react-bootstrap";
import "./App.css";
import { Hasil, ListCategories, NavComponent } from "./components";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <div className="mt-3">
        <div className="container-fluid">
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Product</strong>
              </h4>
              <hr></hr>
            </Col>
            <Hasil />
          </Row>
        </div>
      </div>
    </div>
  );
}

export default App;
