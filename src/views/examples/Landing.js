/*!

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-dark " style={{background: 'linear-gradient(150deg, #1C1C33 15%, #1C1C33 50%, #923cb5 94%)' }}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                
              </div>
              <Container className="py-lg-md d-flex" style={{paddingTop:"50px"}}>
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white" style={{textAlign:'center'}}>
                      Exchange Values with real-time finance
                      </h1>
                      <p className="lead text-white" style={{textAlign:'center'}}>
                      Enabling micro-payments! Manage salaries, remittances, subscriptions, etc. and handle cashflows<br/> efficiently with streamyourpay protocol
                      </p>
                    
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        
          <section className="section section-lg" style={{marginTop:"-100px",background:'black'}}>
            <Container>
              <Row className="row-grid align-items-center" style={{justifyContent:'space-between'}}>
                <Col className="order-md-2" md="4">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="7">
            
                  
                 
                  <Col sm="12">
            {/* <h3 className="heading" style={{}}>{'\u2022'}{" "}
            Exchange Services with real-time finance
            </h3> */}
            

              {/* <h3 className="heading" style={{}}>
              {'\u2022'}{" "}Enabling micro-payments! Manage salaries, remittances, subscriptions, etc. and handle cashflows efficiently with streamyourpay protocol
            </h3> */}
         
            <p className="lead text-bold" style={{fontSize:'32px',marginTop:'30px',fontWeight:"bold",color:"white"}}>
            Payment every minute              </p>
              <p className="lead " style={{fontSize:'16px',marginTop:'-5px',color:"white"}}>
              Streamyourpay believes exchange of value & service should be function of time since time is money. You see your earnings increasing in real-time in the SYP wallet. After a one-time deposit, our smart contracts will start "streaming" the money towards the payees, without you lifting a finger again.
              </p>

            <p className="lead text-bold" style={{color:"white",fontSize:'14px',}} >
            <small className="text-uppercase  font-weight-bold" style={{fontSize:'16px'}}>
          On-Chain
            </small>
            {" "}Transaction is updated on-chain at the time of withdraw request, avoiding transaction fess for each micro streams.
              </p>
              <p className="lead text-bold" style={{marginTop:'-5px',color:"white",fontSize:'14px',}}>
              <small className="text-uppercase text-bold font-weight-bold" style={{fontSize:'16px',color:"white"}}>
              50+ digital assets to transact with
            </small>
               {" "}Streams can easily be created with either stablecoins like DAI, USDC, etc. or digital currencies like ETH, SOL, BTC, etc.
              </p>
              <p className="lead text" style={{marginTop:'-5px',color:"white",fontSize:'14px',}}>
              <small className="text-uppercase text-bold font-weight-bold" style={{fontSize:'16px',color:"white"}}>
               Low Transaction fees
            </small>
            {" "}It is built on solana blockchain. Hence, micro-payments can be enabled because of low transaction cost.
              </p>
          </Col>
                  {/* </div> */}
                </Col>
              </Row>
            </Container>
            <h2 className="" style={{textAlign:'center',color:'white',background:'black',marginTop:'50px'}}>         BRIEF ABOUT PROTOCOL</h2>
          </section>

          <section className="section section-lg  " style={{background:'black',marginTop:'-100px'}}>
            <Container>        
              
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <p className="description mt-3">
                          Streammoney protocol enables power to describe cashflows in two different ways and execute them programmatically on-chain over time without interaction. 
                          </p>
                
                           
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                       
                          <p className="description mt-3">
                          Our first smart contract allows one-to-many distributions of time-based value exchange where all flows are settled based on block timestamps. 
                          </p>
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                         
                          <p className="description mt-3">
                          Our second smart contract allows the capability to structure action-based value exchange in smaller tasks so that creator gets paid as the contract progresses.
                          </p>
                         
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <h2 className="display-3" style={{textAlign:'center',marginBottom:"50px",marginTop:"-50px",color:'white',marginTop:'80px'}}>        HOW IT WORKS?</h2>
          </section>
    
      <section className="section section-lg pt-lg-0 " style={{background:'black',marginTop:'-50px'}}>
            <Container>
              <Row className="justify-content-between" style={{}}>
                <Col lg="12">
                  <Row className="row-grid" style={{justifyContent:'space-between'}}>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold" style={{fontSize:'16px'}}>
        Step-1
                      </h6>
             <div>
                          <small className="text-uppercase font-weight-bold text-primary">
                          Create sollet & phantom wallet if not created else login into wallet   
            </small>
            </div>
                
                           
                        </CardBody>
                      </Card>
             
                    </Col>
              
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold" style={{fontSize:'16px'}}>
        Step-2
                      </h6>
                          <div>
                          <small className="text-uppercase text-info font-weight-bold">
                          Deposit wallet with required sum + transaction fee. Maintain SM token in wallet for transaction fees; swap for SM token on platform itself if required                
            </small>
            </div>
                       
                        
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold" style={{fontSize:'16px'}}>
        Step-3
                      </h6>
                          <div>
                          <small className="text-uppercase text-danger font-weight-bold">
                          Click on create stream {'>'} select nature of stream and fill relevant information              </small>
            </div>
                         
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold" style={{fontSize:'16px'}}>
        Step-4
                      </h6>
                          <div>
                          <small className="text-uppercase text-success font-weight-bold">
                          Approve transaction for action based contract                     </small>
            </div>
                         
                    
                         
                        </CardBody>
                      </Card>
                    </Col>
                    {/* <Col lg="2">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'350px'}}>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <div>
                          <small className="text-uppercase text-success font-weight-bold">
                          Terminate stream if need be               </small>
            </div>
                  
                         
                        </CardBody>
                      </Card>
                    </Col> */}
                 
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <section className="section pb-0 " style={{background: 'linear-gradient(150deg, #000000 15%,#000000 50%, #923cb5 70%)' }}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary" >
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Product Suite</h4>
              
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                          Time based stream
                          </h5>
                          <p>
                          <small className="text-uppercase text-muted font-weight-bold">
                          Pay per usage.{" "}
            </small>
                           Deposit the funds, create stream by time duration and stop the stream once the service ends.
Industries : Salaries, consulting, subscriptions, audio/video content and live events, parking,  renting asset by time. 
                          </p>
                        
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                          Action based stream
                          </h5>
                          <p>
                          <small className="text-uppercase text-muted font-weight-bold">
                          Pay per action.{" "}
            </small>
                           This smart contract is created to cater to deliverables based freelance or consulting work where entire deliverables can be broken in parts and micro-streams can be created within a stream. 
Industries : Freelance and Consulting such as development, design, marketing
                          </p>
                        
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          
         
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-100">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">DAO Governance</h2>
                  <p className="lead text-white">
                  Streammoney DAO is a decentralised autonomous organisation (DAO) with a single purpose:
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Build the decentralized products and blockchain infrastructure necessary to act as the financial equalizer for people and businesses worldwide.</h5>
                  {/* <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">As a PRODUCT DAO, our philosophy is Product-Quality and Community First. This way projects and people from across the DeFi space can come together to collaborate and vote to build the best products for the future of finance. Being a DAO means builders, investors, and users all have an aligned economic incentive to move MeanFi and the Mean Protocol forward while benefiting all parties fairly.</h5>
                
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Learn More</h5>
                  {/* <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
         
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
