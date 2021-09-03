// import React from "react";
// import { Container, Row } from "react-bootstrap";

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <Container className="container-fluid mainContainer">
//           <Row className="row">
//             <div className="col-2 sideNavBar pt-2 d-none d-sm-none d-md-block">
//               {/* <!-- side nav bar  --> */}
//               <div className="logo ml-1">
//                 <h4 className="text-white text-center">
//                   <img
//                     src="./Asset/spotify (2).png"
//                     alt="Spotify Logo"
//                     class="img-fluid"
//                   />
//                   <h4 className="mx-2 px-0 d-none d-sm-none d-md-none d-lg-flex">
//                     Spotify
//                   </h4>
//                 </h4>
//               </div>
//               <div className="mainMenu mb-4 no-gutters">
//                 <ul className="nav flex-column">
//                   {/* <!-- spotify icon not working - problem with font awesome --> */}
//                   {/* <!-- <i class="fab fa-spotify"></i> -->
//                         <!-- home icon and text --> */}
//                   <li className="nav-item">
//                     <a className="nav-link active" href="index.html">
//                       <i className="fas fa-home"></i>
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a className="nav-link active" href="artist.html">
//                       <i class="fas fa-microphone-alt"></i> Artist
//                     </a>
//                   </li>
//                   {/* <!-- search icon and text --> */}
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       <i className="fas fa-search"></i>
//                       Search
//                     </a>
//                   </li>
//                   {/* <!-- library icon and text --> */}
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       <i className="fas fa-stream"></i>
//                       Your Library
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="secondaryMenu no-gutters mb-4">
//                 <ul className="nav flex-column">
//                   <li className="nav-item">
//                     <a className="nav-link plusSign" href="#">
//                       <i className="far fa-plus-square mr-1"></i>
//                       Create Playlist
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       <img
//                         src="https://misc.scdn.co/liked-songs/liked-songs-300.png"
//                         class="likedSong mr-1"
//                         alt="liked song icon"
//                       />
//                       Liked Songs
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="tertiaryMenu no-gutters">
//                 <ul class="nav flex-column">
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Funky Heavy Bluesy
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Your Top Songs 2020
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       In Love With you - Erykah
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       This is Post Malone
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       This is Imagine Dragons
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       This is Avicii
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       New Playlist
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Dinner With Friends
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Meditation
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Winter Loneliness
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Summer Hits
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       YOLO
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Morning Coffee
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="InstallApp">
//                 <ul className="nav flex-column">
//                   <li className="nav-item">
//                     <a href="#" class="nav-link">
//                       <i class="fas fa-arrow-circle-down"></i>
//                       Install App
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </Row>

//           <div className="col-10">
//             <div className="pr-3 mt-3 container-fluid arrowsAndDropdown">
//               <Row>
//                 <div className="col-12">
//                   <button className="ml-4 btn btn-dark badge-pill buttonLeft">
//                     {/* <!-- left arrow --> */}
//                     <i className="fas fa-chevron-left"></i>
//                   </button>
//                   <button className="ml-3 btn btn-dark badge-pill buttonRight">
//                     {/* <!-- right arrow --> */}
//                     <i className="fas fa-chevron-right"></i>
//                   </button>
//                   <div className="dropdown d-none d-sm-block d-md-block">
//                     <button
//                       className="btn btn-dark badge-pill dropdown-toggle"
//                       type="button"
//                       id="dropdownMenu2"
//                       data-toggle="dropdown"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       <img
//                         id="profilePic"
//                         src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg"
//                       />
//                       Username
//                     </button>
//                     <div
//                       clasclassNames="dropdown-menu bg-dark"
//                       aria-labelledby="dropdownMenu2"
//                     >
//                       <button
//                         className="dropdown-item text-white"
//                         type="button"
//                       >
//                         Account
//                       </button>
//                       <button
//                         className="dropdown-item text-white"
//                         type="button"
//                       >
//                         Profile
//                       </button>
//                       <button
//                         className="dropdown-item text-white"
//                         type="button"
//                       >
//                         Private Session
//                       </button>
//                       <button
//                         className="dropdown-item text-white"
//                         type="button"
//                       >
//                         Settings
//                       </button>
//                       <div className="dropdown-divider"></div>
//                       <button
//                         className="dropdown-item text-white"
//                         type="button"
//                       >
//                         Update Spotify now
//                       </button>
//                       <button
//                         className="location.href='login.html'"
//                         class="dropdown-item text-white"
//                         type="button"
//                       >
//                         Log out
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Row>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }
// }
// export default Home;
import { Nav } from "react-bootstrap";
import "./SideNav.css";
import { FaSpotify } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";

const SideNavBar = () => (
  <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    className="SideNavBar d-none d-sm-flex"
  >
    <Nav.Item>
      <Nav.Link href="/home" className="LogoAndName mb-1">
        <span>
          <FaSpotify id="SpotifyLogo" />
        </span>
        <span>Spotify</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="LogoAndName">
        <span>
          <AiFillHome className="LogoAlign" />
        </span>
        <span>Home</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="LogoAndName">
        <span>
          <BiSearch className="LogoAlign" />
        </span>
        <span>Search</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="LogoAndName">
        <span>
          <VscLibrary className="LogoAlign" />
        </span>
        <span>Library</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="LogoAndName">
        <span>Album</span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" className="LogoAndName">
        <span>Artist</span>
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default SideNavBar;
