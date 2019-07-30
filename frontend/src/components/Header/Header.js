import React, { Component } from 'react';
// import PersonIcon from '../images/img.png';
import { ReactComponent as Logo } from '../../logo.svg';
// import Logo from '../../logo.svg';
import './Header.css';

class Header extends Component {

  constructor(props){
  	super(props);

  }

  showAside =()=>{
  	let aside = document.getElementById('aside')
  	,	parentContent = document.getElementById('parentContent')
  	parentContent.setAttribute("style","width: calc(100% - 50px);height: calc(100% - 50px);");
  	aside.setAttribute("style","left:0px;");
  }

  render() {
		return(
				<header id="header">
					<div className="left" >
						<div className="showAside">
							<i className="material-icons" onClick={this.showAside.bind()}>dehaze</i>
						</div>
					</div>
					<div className="center">
						<Logo/>
					</div>
					<div className="right">
						<div className="profile_details">
							<ul>
								<li className="dropdown profile_details_drop">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
										<div className="profile_img">
											<div className="prfil-img"><img src="https://www.inboundcycle.com/hubfs/layout/v3/img/email/gmail-signatures/team-01/pvaldes.jpg" alt="" /></div>
											<div className="user-name">
												<p>Admin Name</p>
												<span>Administrator</span>
											</div>
											<i className="material-icons">keyboard_arrow_down</i>
										</div>
									</a>
									<ul className="dropdown-menu drp-mnu">
										<li> <a href="#"><i className="material-icons">settings</i> Settings</a> </li> 
										<li> <a href="#"><i className="material-icons">import_contacts</i> My Account</a> </li> 
										<li> <a href="#"><i className="material-icons">person</i> Profile</a> </li> 
										<li> <a href="#"><i className="material-icons">power_settings_new</i> Logout</a> </li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</header>
		);
  	}

}

export default Header;