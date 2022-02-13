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
{/*           
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/creativetim"
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
                  color="dribbble"
                  href="https://dribbble.com/creativetim"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
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
              </Col> */}
              <Row className="align-items-center justify-content-md-between">
              <Col md="7">
             
              </Col>
              <Col md="5">
              <Row className="align-items-end justify-content-md-between">
              <Col md="6">
                <div style={{  display: 'flex',
  flexDirection: 'column'}}>
     <div>
     <small className="text-uppercase text-muted font-weight-bold">
                    SM Token
              </small>
              </div>
      <div>
                    
      <small className="text-uppercase text-muted font-weight-bold">
                    UseCases
              </small>
              </div>
              <div>
                    
              <small className="text-uppercase text-muted font-weight-bold">
                    UseCases
              </small>
              </div>
                  <div>

                  <small className="text-uppercase text-muted font-weight-bold">
                  What is a stream ?
            </small>
            </div>
            <div>
            <small className="text-uppercase text-muted font-weight-bold">
            Docs
            </small>
            </div>
            <div>
      
            <small className="d-block text-uppercase font-weight-bold ">
            Resources
            </small>
            </div>
            </div>
            </Col>
            <Col md="6">
            <div style={{  display: 'flex',
  flexDirection: 'column'}}>
      <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Linkedin
            </small>
            </div>  <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Github
            </small>
            </div>  <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Email
            </small>
            </div>  <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Telegram
            </small>
            </div>
                  <div>
                  <small className="text-uppercase text-muted font-weight-bold">
                  Twitter
            </small>
            </div>
            <div>
            <small className="text-uppercase text-muted font-weight-bold">
            Discord
            </small>
            </div>
            <div>
            <small className="d-block text-uppercase font-weight-bold ">
            Let’s connect!
            </small>
            </div>
            </div>
              </Col>
              </Row>
            
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
