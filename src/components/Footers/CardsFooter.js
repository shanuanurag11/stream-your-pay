/*!

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
       
          <Container>
          
             
              <Row className="align-items-center justify-content-md-between">
              <Col md="7">
              <img
              style={{width:'190px',height:'190px'}}
                  alt="..."
                          src={require("assets/img/icons/Untitled_Artwork.svg")}
                        />
              <span className="text" style={{ fontSize:"28px",marginLeft:"-30px"}}>STREAM MONEY</span>
              </Col>
              <Col md="5">
              <Row className="align-items-end justify-content-md-between">
              <Col md="6">
                <div style={{  display: 'flex',
  flexDirection: 'column'}}>
     
      
            </div>
            </Col>
            <Col md="6">
            <div style={{  display: 'flex',
  flexDirection: 'column'}}>
            </div>
              </Col>
              </Row>
            
              </Col>
            </Row>
            <Row className="align-items-center justify-content-md-between">

            <Col className="" lg="6"></Col>
            <Col className="text-lg-center btn-wrapper" lg="5" style={{marginTop:"20px"}}>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/StreamMoney3"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                 style={{backgroundColor:"blue",opacity: 0.8}}
                  href="https://discord.gg/YBAfhHsZ"
                  id="tooltip829810202"
                  target="_blank"
                >
                              <img    alt="..."
                    src={require("../../assets/img/icons/discord-icon.png")}  style={{width:'24px',height:'24px'}} />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
      
              </Row>
           

            <hr />

            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="#"
                    target="_blank"
                  >
                    Stream Money
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                       Stream Money
                    </NavLink>
                  </NavItem>
                 
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
