import { Row, Col, Form } from "react-bootstrap";
import SingleCard from "./SingleCard";
import React from "react";

class RowComponent extends React.Component {
  state = {
    data: [],
    Loading: false,
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );

      if (response.ok) {
        let music_json = await response.json();
        console.log(music_json.data[0]);
        console.log(music_json.data.album.cover);
        this.setState({ data: music_json });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.data);
    return (
      this.state.data &&
      !this.state.loading && (
        <div>
          {
            <Row xs={1} md={4} lg={6} xl={8} className="mx-2">
              {this.state.data.map((album) => (
                <Col key={album.id} className="mb-3">
                  <SingleCard music_info={album} />
                  <p>test</p>
                </Col>
              ))}
            </Row>
          }
        </div>
      )
    );
  }
}

export default RowComponent;
