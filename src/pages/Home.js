import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Row,
    Col
  } from "reactstrap";

export class Home extends Component {
    render() {
        return (
            <div className="content">
               <Row>
               <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="inner">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."                        
                        src={require("../assets/img/theo1.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebookblue">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                   {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                       </Button>*/}
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="inner">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."                        
                        src={require("../assets/img/theo2.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" >
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" >
                      <i className="fab fa-twitter" />
                    </Button>
                  {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                       </Button>*/}
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="inner">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."                        
                        src={require("../assets/img/theo3.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
              {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                       </Button>*/}
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="inner">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."                        
                        src={require("../assets/img/theo4.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                 {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                       </Button>*/}
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <div className="inner">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."                        
                        src={require("../assets/img/theo5.jpg")}
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">Ceo/Co-Founder</p>
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                   {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                       </Button>*/}
                  </div>
                </CardFooter>
              </Card>
            </Col>
               </Row>
            </div>
        )
    }
}

export default Home
