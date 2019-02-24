import React from 'react'
import { push } from 'react-router-redux'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import {Grid, Col, Row, Button, Modal, FormGroup, FormControl, Tabs, Tab, PanelGroup, Panel} from 'react-bootstrap'
import { connect } from 'react-redux'
import {getProfileMembers, getProfilePortfolio, getProfileProjects, getProfileGroups, getProfileResumes } from '../../actions/profile/actions'
import ProfilePortfolioCard from '../../components/Layout/ProfilePortfolioCard'
import ProjectCard from '../../components/Layout/ProjectCard'
import ProfileGroupCard from '../../components/Layout/ProfileGroupCard'
import ProfileMemberCard from '../../components/Layout/ProfileMemberCard'
import ResumeCard from '../../components/Layout/ResumeCard'

import IconButton from '../../components/Form/IconButton'
import RoundedButton from '../../components/Form/RoundedButton'
 class Main extends React.Component{
  constructor(props){
  	super(props)
    this.state = {
      resumePopup: false,
      portfolioPopup: false,
      activeKey: '2',
      total: '1000'
    }
  }
  componentWillMount(){
    this.props.dispatch(getProfileResumes())
    this.props.dispatch(getProfilePortfolio())
    this.props.dispatch(getProfileGroups())
    this.props.dispatch(getProfileProjects())
    this.props.dispatch(getProfileMembers())
  }
  close(){
      this.setState({resumePopup:false,portfolioPopup: false})
  }
  openResumePopup(){
    this.setState({resumePopup: true})
  }
  openPortfolioPopup(){
    this.setState({portfolioPopup: true})
  }
  handleSelect(activeKey) {
    this.setState({ activeKey });
  }
  
  render(){
    let { members,groups,portfolio,resumeList, projects } = this.props.profile
    return(
    	<div className="rightBar">
    		<div className="profileTopCon lessPadding hasShadow">
          <div className="innerTopCon">
            
          </div>
          <div className="profileData">
            <Row>
              <Col xs={3}>
                <IconButton iconClass="fa fa-tv"/>
                <IconButton iconClass="fa fa-ellipsis-h"/>
              </Col>
              <Col xs={6} className="text-center">
                <div className="userDetail">
                  <div className="imgCon">
                    <img src="/images/7.png" />
                  </div>
                  <h3>Lois shelton</h3>
                  <h5>Manipal University</h5>
                  <p>Followers <b>236</b> <span className="divider"></span> Following <b>930</b></p>
                </div>
              </Col>
              <Col xs={3} className="text-right">
                <RoundedButton label="Settings" style={{'color' : '#b3b3b3'}}/>
              </Col>
            </Row>
          </div>
        </div>
        <div className="profileTabs profileHomeTabs">
          <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="Resume">
              <div className="resumeCon">
                <div className="tabHeading">
                  <h3>{this.state.total}</h3>
                  <h6>Total Points</h6>
                </div>
                <div className="resumeContent">
                  <ul>
                    {resumeList && resumeList.map((item, i)=>{
                      return(
                        <ResumeCard 
                          key={i}
                          data={item}
                          openResumePopup={this.openResumePopup.bind(this)}
                        />
                    )})}
                  </ul>
                </div>
              </div>
            </Tab>
            <Tab eventKey={2} title="Portfolio">
              <div className="portfolioCon">
                <Row>
                {portfolio && portfolio.map((item,i) =>{
                  return(
                    <ProfilePortfolioCard 
                      key={i}
                      openPortfolioPopup={this.openPortfolioPopup.bind(this)}
                      data= {item}
                      itemPerRow={3}
                    />
                )})}
                </Row>
              </div>
            </Tab>
            <Tab eventKey={3} title="Projects">
              <div className="portfolioCon projectCon">
                <Row>
                  {projects && projects.map((item,i) => {
                    return(
                      <ProjectCard 
                        key={i}
                        data={item}
                        itemPerRow={3}
                      />
                  )})}
                </Row>
              </div>
            </Tab>
            <Tab eventKey={4} title="Groups">
              <div className="groupsCon">
                <Row>
                {groups && groups.map((item,i) =>{
                  return(
                    <ProfileGroupCard 
                      key={i}
                      data={item}
                      itemPerRow={2}
                    />
                )})}
                </Row>
              </div>
            </Tab>
            <Tab eventKey={5} title="Members">
              <div className="membersCon">
                <div className="membersHeader">
                  <h3>
                    <i className="glyphicon glyphicon-play-circle" />
                    Members
                  </h3>
                </div>
                <div className="membersList">
                  <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="Follower">
                      <div className="memberTabCon hasShadow">
                        <div className="memberSearch">
                          <i className="fa fa-search" />
                          <FormControl type="text" placeholder="Search Member"/>
                        </div>
                        <div className="memberListCon">
                          <Row>
                            {members && members.map((item,i) =>{
                                return <ProfileMemberCard 
                                        key={i}
                                        data={item}
                                        itemPerRow={2}
                                      />
                            })}
                          </Row>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey={2} title="Following">
                      <div className="memberTabCon hasShadow">
                        <div className="memberSearch">
                          <i className="fa fa-search" />
                          <FormControl type="text" placeholder="Search Member"/>
                        </div>
                        <div className="memberListCon">
                          <Row>
                            {members && members.map((item,i) =>{
                                return <ProfileMemberCard 
                                        key={i}
                                        data={item}
                                        itemPerRow={2}
                                      />
                            })}
                          </Row>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        <Modal show={this.state.resumePopup} onHide={this.close.bind(this)} className="resumeModal">
            <Modal.Body>
              <div className="resumeModalCon">
                <div className="resumeDetail">
                  <div className="resumeTop">
                    <Row>
                      <Col sm={8}>
                        <div className="userCon">
                          <div className="imgCon">
                            <img src="/images/7.png" />
                          </div>
                          <div className="userText">
                            <h3>Javascript</h3>
                            <h5>72,123</h5>
                          </div>
                        </div>
                      </Col>
                      <Col sm={4}>
                        <Button className="btn pull-right stngBtn"><i className="fa fa-ellipsis-h" /></Button>
                      </Col>
                    </Row>
                  </div>
                  <div className="resumeAccorion">
                    <PanelGroup
                      accordion
                      id="accordion-controlled-example"
                      activeKey={this.state.activeKey}
                      onSelect={this.handleSelect.bind(this)}
                    >
                      <Panel eventKey="1">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            Work Experiance
                            <span className="pull-right">100</span>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <div className="noTask">
                            Not started working yet
                          </div>
                        </Panel.Body>
                      </Panel>
                      <Panel eventKey="2">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            Academics
                            <span className="pull-right">100</span>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                      </Panel>
                      <Panel eventKey="3">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            Online Training
                            <span className="pull-right">100</span>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                      </Panel>
                      <Panel eventKey="4">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            Social Points
                            <span className="pull-right">100</span>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                      </Panel>
                    </PanelGroup>
                  </div>
                </div>
              </div>
            </Modal.Body>
        </Modal>
        <Modal bsSize="large" show={this.state.portfolioPopup} onHide={this.close.bind(this)} className="portfolioModal">
            <Modal.Body>
              <Row className="portfolioContainer">
                <Col md={8}>
                  <img src="/images/portfolioimg.png" className="img-responsive" style={{width: '100%'}}/>
                </Col>
                <Col md={4}>
                  <div className="portfolioBy">
                    <div className="userCon">
                      <div className="imgCon">
                        <img src="/images/7.png"/>
                      </div>
                      <div className="userText">
                        <h3>Lois shelton</h3>
                        <h5>New york, United Kingdom</h5>
                      </div>
                      <RoundedButton label="Follow" className="blueBtn"/>
                    </div>
                  </div>
                  <div className="portfolioDetail">
                    <p>this is detail box</p>
                    <ul>
                      <li>
                        <i className="fa fa-eye" />
                        1432
                      </li>
                      <li>
                        <i className="fa fa-heart" />
                        143
                      </li>
                      <li>
                        <i className="fa fa-comment" />
                        21
                      </li>
                    </ul>
                  </div>
                  <div className="comments">
                    <ul>
                      <li>
                        <div className="userCon">
                          <div className="imgCon">
                            <img src="/images/7.png" />
                          </div>
                          <div className="userText">
                            <h3>Lois shelton<span>1:16 PM</span></h3>
                            <h5>New york, United Kingdom</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userCon">
                          <div className="imgCon">
                            <img src="/images/7.png" />
                          </div>
                          <div className="userText">
                            <h3>Lois shelton<span>1:16 PM</span></h3>
                            <h5>New york, United Kingdom</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userCon">
                          <div className="imgCon">
                            <img src="/images/7.png" />
                          </div>
                          <div className="userText">
                            <h3>Lois shelton<span>1:16 PM</span></h3>
                            <h5>New york, United Kingdom</h5>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="userCon">
                          <div className="imgCon">
                            <img src="/images/7.png" />
                          </div>
                          <div className="userText">
                            <h3>Lois shelton<span>1:16 PM</span></h3>
                            <h5>New york, United Kingdom</h5>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="addComment">
                    <div className="commentBy">
                      <img src="/images/7.png" />
                    </div>
                    <FormControl type="text" placeholder="Type your text here"/>
                  </div>
                </Col>
              </Row>
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
)(Main)
const mapDispatch = dispatch => {
  const allActionProps = Object.assign({}, dispatch)
  return allActionProps
}