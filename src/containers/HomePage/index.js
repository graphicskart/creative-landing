import React from 'react'
import { push } from 'react-router-redux'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import {Grid, Col, Row, Button, Modal, FormGroup, FormControl} from 'react-bootstrap'
import MarketingNavBar from '../../components/Navigation/MarketingNavBar'
import {IsValidForm} from '../../components/common/validation'
import scrollToComponent from 'react-scroll-to-component';
import { connect } from 'react-redux'


 class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showSignupModal: false,
      showSignupSuccess: false,
      showLoginModal: false,
      loading: false,
      currentSection : 'bannerCon',
      slideNav : ['bannerCon', 'firstCon', 'secondCon', 'thirdCon', 'fourthCon'],
      signUp: {
        'client_name' : '',
        'college_name' : '',
        'designation' : '',
        'email' : '',
        'phone' : ''
      },
      login :{
        email: '',
        password: ''
      },
      errors:{}
    }
  }
  close(){
      this.setState({showSignupModal:false, showSignupSuccess: false,errors:{}, showLoginModal: false})
  }
  openSignUpModal(){
    this.setState({showSignupModal:true})
  }
  openLoginModal(){
    this.setState({showLoginModal:true})
  }

  goDown(){
    scrollToComponent(this.refs.firstCon, {
      offset: -70,
      align: 'top',
      duration: 1000,
      ease: 'outCirc'
    });
  }
  goToSection(ref){
    this.setState({currentSection: ref})
    scrollToComponent((this.refs[ref]), {
      offset: -70,
      align: 'top',
      duration: 1000,
      ease: 'outCirc'
    });
  }

  showError(key){
    let errors = this.state.errors
    if(errors[key] && errors[key].length){
      return true
    }
    return false
  }
  getError(key){
    let errors = this.state.errors
    if(errors[key] && errors[key].length){
      return typeof errors[key] === 'object' ? errors[key].join(',') : errors[key]
    }
    return false
  }

  onInputChange(key,event){
    let {signUp} = this.state
    signUp[key] = event.target.value
    this.setState({signUp})
  }
  onLoginChange(key,event){
    let {login} = this.state
    login[key] = event.target.value
    this.setState({login})
  }

  

  signUp(){
    let fields = ['client_name', 'college_name', 'designation', 'email', 'phone']
    let formValidation =  IsValidForm(fields,this.state.signUp);
    this.setState({ errors: formValidation.errors})
    if (formValidation.validate) {
      
    }
  }

  loginFun(){
    
  }
  

  render(){
    let {signUp,login} = this.state;
    return(
        <div>
          <MarketingNavBar openLoginModal={this.openLoginModal.bind(this)}/>
          <div className="homeCon">
            <div className="slideNavigate">
              <ul>
                {this.state.slideNav.map((item, index) =>{
                  return  <li key={index} onClick={this.goToSection.bind(this, item)}>
                            <a className={this.state.currentSection === item ? 'active' : ''}></a>
                          </li>
                  })
                }
              </ul>
            </div>
            <div className="bannerCon" ref={this.state.slideNav[0]}>
              <Grid className="bringItToTop">
                <Row>
                  <Col md={7}>
                    <img src="images/banner.png" />
                  </Col>
                  <Col md={5}>
                    <Button type="button" className="pinkBtn" onClick={this.openSignUpModal.bind(this)}>Sign up</Button>
                  </Col>
                </Row>
              </Grid>
              <Button className="goDownBtn" onClick={this.goDown.bind(this)}>
                <span className="glyphicon glyphicon-chevron-down" />
              </Button>
            </div>
            <div className="firstCon" ref={this.state.slideNav[1]}>
              <Grid className="bringItToTop">
                <Row>
                  <Col md={6}>
                    <div className="indexCon">
                      <h3>01</h3>
                      <h4>The Problem</h4>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img src="images/box.png" />
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="secondCon" ref={this.state.slideNav[2]}>
              <div className="innerSecondCon">
                <Row>
                  <Col md={12}>
                    <img src="images/tech.png" className="img-responsive" />
                    <div className="indexCon foundation">
                      <h3>02</h3>
                      <h4>Idea &<br />Foundation</h4>
                    </div>
                    <div className="indexCon technology">
                      <h3>03</h3>
                      <h4>Technology</h4>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="thirdCon" ref={this.state.slideNav[3]}>
              <Grid className="bringItToTop">
                <Row>
                  <Col md={12} className="text-center">
                    <img src="images/teddy.png" className="teddyIcon" alt="" />
                  </Col>
                  <Col md={12}>
                    <ul className="home_links">
                      <li>
                        <a href="">
                          <i className="userIcon" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="socketIcon" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="chatIcon" />
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className="fourthCon" ref={this.state.slideNav[4]}>
              <Grid className="bringItToTop">
                <Row>
                  <Col md={12} className="text-center">
                    <h3>Our Mission</h3>
                    <img src="images/mission.png" />
                  </Col>
                </Row>
                <div className="centerLine"></div>
              </Grid>
            </div>
          </div>


          <Modal show={this.state.showSignupModal} onHide={this.close.bind(this)} className="signupPopup">
            <Button className="close modalClose" onClick={this.close.bind(this)}><i className="fa fa-times"></i></Button>
            <Modal.Body>
              <div className="modalCon">
                <h3>
                  <i className="signupIcon" />
                  Sign Up Request
                </h3>
                <div className="formCon">
                  <FormGroup>
                    <i className="fa fa-user" />
                    <FormControl type="text" placeholder="Client Name" value={signUp.client_name} onChange={this.onInputChange.bind(this,'client_name')}/>
                    {!!this.showError('client_name')? <p className="error-message">{this.getError('client_name')} </p>: null}
                  </FormGroup>
                  <FormGroup>
                    <i className="fa fa-building" />
                    <FormControl type="text" placeholder="College Name" value={signUp.college_name} onChange={this.onInputChange.bind(this,'college_name')}/>
                    {!!this.showError('college_name')? <p className="error-message">{this.getError('college_name')} </p>: null}
                  </FormGroup>
                  <FormGroup>
                    <i className="fa fa-briefcase" />
                    <FormControl type="text" placeholder="Designation" value={signUp.designation} onChange={this.onInputChange.bind(this,'designation')}/>
                    {!!this.showError('designation')? <p className="error-message">{this.getError('designation')} </p>: null}
                  </FormGroup>
                  <FormGroup>
                    <i className="fa fa-envelope" />
                    <FormControl type="email" placeholder="Email" value={signUp.email} onChange={this.onInputChange.bind(this,'email')}/>
                    {!!this.showError('email')? <p className="error-message">{this.getError('email')} </p>: null}
                  </FormGroup>
                  <FormGroup>
                    <i className="fa fa-phone" />
                    <FormControl type="text" placeholder="Phone" value={signUp.phone} onChange={this.onInputChange.bind(this,'phone')}/>
                    {!!this.showError('phone')? <p className="error-message">{this.getError('phone')} </p>: null}
                  </FormGroup>
                  <div className="text-right">
                    <Button className="btn" onClick={this.close.bind(this)}>cancel</Button>
                    <Button className="btn btn-primary" onClick={this.signUp.bind(this)} disabled={this.state.loading}>
                      {this.state.loading ?  <img src="images/loading.gif" /> : 'Send'}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={this.state.showSignupSuccess} onHide={this.close.bind(this)} className="signupPopup signupSuccess">
            <Button className="close modalClose" onClick={this.close.bind(this)}><i className="fa fa-times"></i></Button>
            <Modal.Body>
              <div className="modalCon">
                <h3>
                  <i className="signupSuccessIcon" />
                  Sign Up Request sent
                </h3>
                <div className="formCon">
                  <p>Thank you for your interest. Our sales team will get in touch with you shortly.</p>
                  <div className="text-right">
                    <Button className="btn btn-primary" onClick={this.close.bind(this)}>Ok</Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>


          <Modal show={this.state.showLoginModal} onHide={this.close.bind(this)} className="signupPopup">
            <Button className="close modalClose" onClick={this.close.bind(this)}><i className="fa fa-times"></i></Button>
            <Modal.Body>
              <div className="modalCon">
                <h3>
                  <i className="loginIcon" />
                  Login
                </h3>
                <div className="formCon">
                  <FormGroup>
                    <i className="fa fa-envelope" />
                    <FormControl type="email" placeholder="Email" value={login.email} onChange={this.onLoginChange.bind(this,'email')}/>
                    {!!this.showError('email')? <p className="error-message">{this.getError('email')} </p>: null}
                  </FormGroup>
                  <FormGroup>
                    <i className="fa fa-eye" />
                    <FormControl type="password" placeholder="Password" value={login.password} onChange={this.onLoginChange.bind(this,'password')}/>
                    {!!this.showError('password')? <p className="error-message">{this.getError('password')} </p>: null}
                  </FormGroup>
                  <div className="text-right">
                    <Button className="btn" onClick={this.close.bind(this)} style={{background: 'none'}}>Forgot Password?</Button>
                    <Button className="btn btn-primary" onClick={this.loginFun.bind(this)} disabled={this.state.loading}>
                      {this.state.loading ?  <img src="images/loading.gif" /> : 'Login'}
                    </Button>
                  </div>
                  <div className="btm_link">
                    <a href="">New College? Create Account</a>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          
        </div>
      )
  }
 } 


const mapStateToProps = state => ({})

export default connect(
  state => (
    {
      
    },
    mapDispatch
  )
)(HomePage)

const mapDispatch = dispatch => {
  const allActionProps = Object.assign({}, dispatch)
  return allActionProps
}

