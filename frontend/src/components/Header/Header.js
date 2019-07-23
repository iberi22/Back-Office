import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  constructor(props){
  	super(props);
  }

  render() {
		return(
				<header>
					<div className="left" >
						<div className="showAside">
							<i className="material-icons">dehaze</i>
						</div>
					</div>
					<div className="right">
						<div className="profile_details">
							<ul>
								<li className="dropdown profile_details_drop">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
										<div className="profile_img">
											<span className="prfil-img"><img src="images/users.png" alt="" /> </span>
											<div className="user-name">
												<p>Admin Name</p>
												<span>Administrator</span>
											</div>
											<i className="fa fa-angle-down lnr"></i>
											<i className="fa fa-angle-up lnr"></i>
											<div className="clearfix"></div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</header>
		);
  	}

}

export default Header;