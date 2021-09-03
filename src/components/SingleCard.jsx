import React, { Component } from "react";
import { Card } from "react-bootstrap";

// export default class SingleCard extends Component {
// state = {
//   data: [],
// };

// componentDidMount = async () => {
//   try {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/deezer/search?q=album"
//     );
//     console.log(response);
//     let image = await response.json();
//     console.log(image.data);
//     this.setState({ data: image.data });
//   } catch (error) {
//     console.log(error);
//   }
// };

//   render() {
//     // console.log(this.state.data[0].album.cover);
//     return (
//       <div>
//         <Card>
//           <Card.Img variant="top" src={this.props.music_info.album.cover} />
//           <h2>{this.props.music_info.id}</h2>
//         </Card>
//       </div>
//     );
//   }
// }

const SingleCard = ({ music_info }) => (
  <div>
    <Card>
      <Card.Img variant="top" src={music_info.album.cover} />
      <h2>{music_info.id}</h2>
    </Card>
  </div>
);

export default SingleCard;
