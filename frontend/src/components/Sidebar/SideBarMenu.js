import React, { Component } from 'react';
// import './SideBar.css';

class SideBarMenu extends Component {

  constructor(props){
  	super(props);
  }

  render() {
		return(
	      <li ><i className="material-icons">{this.props.params.icon}</i>{this.props.params.text}</li>
		);
  	}

}

export default SideBarMenu;