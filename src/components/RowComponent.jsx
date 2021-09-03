import SingleCard from "./SingleCard";
import React from "react";
import { Row, Col } from "react-bootstrap";

class RowComponent extends React.Component {
  state = {
    data: [],
    Loading: true,
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
      );

      if (response.ok) {
        //    👇🏻  this is inside of response.json
        // you need to destructure or access  as music_json.data
        let { data } = await response.json();

        this.setState({ data, Loading: false });
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
      !this.state.Loading && (
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
