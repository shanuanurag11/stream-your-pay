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
     
              <div className="shape shape-style-1 shape-dark">
              <img alt="..." style={{width:'100%',height:'auto'}} src={require('../../assets/img/icons/banner.jpg')}/>
                
              </div>
              <Container className="py-lg-md d-flex" style={{paddingTop:"50px"}}>
                <div className="col px-0">
                  <Row>
                    <Col lg="12">
                      <h1 className="display-3 text-white " style={{textAlign:'center',fontFamily:'denim-sans'}}>
                      Transfer value real-time with Payment Streaming protocol
                      </h1>
                      <p className="lead text-white" style={{textAlign:'center',fontFamily:'denim-sans'}}>
                      Manage recurring payouts, subscriptions, digital assets rental, etc. cashflows efficiently with continous settlement protocol
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
        
          <section className="section section-lg" style={{marginTop:"-100px",background:'#04062C'}}>
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
         
         
            <p className="lead text-bold" style={{fontSize:'32px',marginTop:'30px',fontWeight:"bold",color:"white",fontFamily:'denim-sans'}}>
            Payment every second              </p>
              <p className="lead " style={{fontSize:'16px',marginTop:'-5px',color:"white",fontFamily:'denim-sans'}}>
              An implicit debt obligation is established between payer and beneficiary when payment is exchanged for their time & efforts. Such obligation carries 0 % interest and financially favors the payer. StreamMoney provides the ability to pay digitally for bits of data or services in small increments continuously over time. After one-time deposit, smart contracts starts "streaming" the money towards the payees and payees can withdraw vested money at their convenience which removes debt obligation.
              </p>
              <p className="lead text" style={{marginTop:'-5px',color:"white",fontSize:'14px',fontFamily:'denim-sans'}}>
            <small className="text-uppercase text-bold font-weight-bold" style={{fontSize:'16px',color:"white",fontFamily:'denim-sans'}}>
               Low Transaction fees - 
            </small>
            {" "}Transaction gets confirmed in less than a second and costs as low as US$ 0.01.
              </p>

            <p className="lead text-bold" style={{color:"white",fontSize:'14px',fontFamily:'denim-sans'}} >
            <small className="text-uppercase  font-weight-bold" style={{fontSize:'16px'}}>
               On-Chain - 
            </small>
            {" "}Transaction is updated on-chain at the time of withdraw request, avoiding transaction fess for each micro streams.
              </p>
              <p className="lead text-bold" style={{marginTop:'-5px',color:"white",fontSize:'14px',fontFamily:'denim-sans'}}>
              <small className="text-uppercase text-bold font-weight-bold" style={{fontSize:'16px',color:"white"}}>
               50+ digital assets to transact with - 
            </small>
               {" "}Streams can easily be created with either stablecoins or digital currencies like USDC, SOL, etc.
              </p>
              
          </Col>
                  {/* </div> */}
                </Col>
              </Row>
            </Container>
            <h2 className="" style={{textAlign:'center',color:'white',background:'#04062C',marginTop:'50px',fontFamily:'denim-sans'}}>         BRIEF ABOUT PROTOCOL</h2>
          </section>

          <section className="section section-lg  " style={{background:'#04062C',marginTop:'-100px'}}>
            <Container>        
              
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                       
                        <Col lg="12">
                        <Row className="row-grid" style={{alignItems:"center"}}>
                        <Col lg="3">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          </Col>
                          <Col lg="8">
                          <p className="lead text-primary" style={{marginTop:'0px',color:"black",fontSize:'14px',fontWeight:'bold',fontFamily:'denim-sans'}}>
            
               {" "} Real-Time Payouts
              </p>
                          </Col>
                          </Row>
                          </Col>
                        
                          <p className="description mt-2" style={{fontFamily:'denim-sans'}}>
                          It enables employment contracts to pay salaries per second, businesses to send recurring payments, and repayment of loans. It represents the idea of continuous payments over time. Interest can be earned by staking the streamed amount which is shared with both parties.
                          </p>
                
                           
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <Col lg="12">
                        <Row className="row-grid" style={{alignItems:"center"}}>
                        <Col lg="3">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          </Col>
                          <Col lg="8">
                          <p className="lead text-success" style={{marginTop:'0px',color:"black",fontSize:'14px',fontWeight:'bold',fontFamily:'denim-sans'}}>
            
               {" "} PayAsUse 
              </p>
                          </Col>
                          </Row>
                          </Col>
                       
                          <p className="description mt-2" style={{fontFamily:'denim-sans'}}>
                           It enables merchant to offer pay-per-use online services for Digital newsletters, podcasts, online classes, and music streaming, etc. Businesses can reinvent themselves by leveraging low customer acquisition costs and convert into subscriptions.
                          </p>
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <Col lg="12">
                        <Row className="row-grid" style={{alignItems:"center"}}>
                        <Col lg="3">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          </Col>
                          <Col lg="8">
                          <p className="lead text-warning" style={{marginTop:'0px',color:"black",fontSize:'14px',fontWeight:'bold',fontFamily:'denim-sans'}}>
            
               {" "} Digital Asset Rental 
              </p>
                          </Col>
                          </Row>
                          </Col>
                         
                          <p className="description mt-2" style={{fontFamily:'denim-sans'}}>
                          It enables digital asset owners such as 3D artists, digital real estate, live events, exhibition owners to rent digital assets for their utility without locking up capital or exposing themselves to volatility by just paying small fees. 
                          </p>
                        
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <h2 className="display-3" style={{textAlign:'center',marginBottom:"50px",color:'white',marginTop:'80px'}}>        Use Cases</h2>
            <p className="description mt-3" style={{textAlign: 'center',color:'white', paddingLeft: '15%',paddingRight:'15%',lineHeight:"30px",fontFamily:'denim-sans',fontSize:'19px' }}>
                          With remote work culture gaining momentum, workers are inclined to get paid by hours. Rising trends towards personalization can shift user behavior to pay as they use services. With streaming protocol, consumers can pay five cents for an article, a dollar for online classes, or ten bucks to rent Software tool. 
                          </p>
          </section>
      <section className="section section-lg pt-lg-0 " style={{background:'#04062C',marginTop:'-50px'}}>
            <Container>
              <Row className="justify-content-between" style={{}}>
                <Col lg="12">
                  <Row className="row-grid" style={{justifyContent:'space-between'}}>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold text-primary" style={{fontSize:'16px'}}>
        Real time Income
                      </h6>
             <div>
                          <small className="font-weight-bold" style={{fontFamily:'denim-sans'}}>
                           Salaries, Gig workers. Send money to employees by minutes/days/weeks and by milestones to contractor & freelancers.    
            </small>
            </div>
                
                           
                        </CardBody>
                      </Card>
             
                    </Col>
              
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold text-info" style={{fontSize:'16px'}}>
        Consumer media and subscriptions
                      </h6>
                          <div>
                          <small className="font-weight-bold" style={{fontFamily:'denim-sans'}}>
                           Offer pay-per-use online services and lower your customer acquisition cost. Focused industries are content on demand (audio, video, text), Live events, Subscriptions, etc.        
            </small>
            </div>
                       
                        
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold text text-danger" style={{fontSize:'16px'}}>
        Metaverse
                      </h6>
                          <div>
                          <small className="font-weight-bold" style={{fontFamily:'denim-sans'}}>
                           Digital Assets Rental by seconds, Live events tickets by time, and Billboard advertising by seconds are a few use cases where StreamMoney protocol can be utilized for value transfer.              </small>
            </div>
                         
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card className="card-lift--hover shadow border-0" style={{minHeight:'360px',minWidth:'220px'}}>
                        <CardBody className="py-5">
                        <h6 className="display-6 font-weight-bold text-success" style={{fontSize:'16px'}}>
        Emerging Usecases
                      </h6>
                          <div>
                          <small className="font-weight-bold" style={{fontFamily:'denim-sans'}}>
                           Referral marketing on web3 and micro-mobility services such as bike rental                     </small>
            </div>
                         
 
                  
                         
                        </CardBody>
                      </Card>
                    </Col> 
                 
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
          
         
          {/* <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-100">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white" style={{fontFamily:'denim-sans'}}>DAO Governance</h2>
                  <p className="lead text-white" style={{fontFamily:'denim-sans'}}>
                  StreamMoney DAO is a decentralised autonomous organisation (DAO) with a single purpose:
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3" style={{fontFamily:'denim-sans'}}>Build the decentralized products and blockchain infrastructure necessary to act as the financial equalizer for people and businesses worldwide.</h5>
                 
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3" style={{fontFamily:'denim-sans'}}>As a PRODUCT DAO, our philosophy is Product-Quality and Community First. This way projects and people from across the DeFi space can come together to collaborate and vote to build the best products for the future of finance. Being a DAO means builders, investors, and users all have an aligned economic incentive to move MeanFi and the Mean Protocol forward while benefiting all parties fairly.</h5>
                
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3" style={{fontFamily:'denim-sans'}}>Learn More</h5>
                
                </Col>
              </Row>
            </Container>

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
          </section> */}
         
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
