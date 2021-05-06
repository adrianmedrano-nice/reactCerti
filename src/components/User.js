import { useState, useEffect } from "react";
import VideoDetail from "./VideoDetail";
import { Button, Alert, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const User = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      try {
        fetch("https://mocki.io/v1/1c68ed2c-eb6c-4ce9-85a8-2890183e46fc")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setMovies(data);
          });
      } catch (err) {
        console.err(err);
      }
    };
    const getMoviesAxios = async () => {
      try {
        const { data } = await axios.get(
          "https://mocki.io/v1/1c68ed2c-eb6c-4ce9-85a8-2890183e46fc"
        );
        console.log(data);
        setMovies(data);
      } catch (err) {
        console.err(err);
      }
    };

    // getMovies();
    getMoviesAxios().catch(null);
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          {movies.map((data) => (
            <Col xs={3} className="mb-5" key={data.id}>
              <VideoDetail data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default User;
