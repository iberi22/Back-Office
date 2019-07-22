import React, { Component } from 'react';
import SidebarMenu from './SideBarMenu'
import './SideBar.css';

class Sidebar extends Component {

  constructor(props){
  	super(props);
  	this.state = {
  		options : '',
  	}
  	let options = [
  		{
  			icon : 'dashboard',
  			text : 'Dashboard'
  		},
  		{
  			icon : 'settings',
  			text : 'Configuracion'
  		}
  	]
  	,	arrayOptions = []

  	options.forEach(function(element) {
  		arrayOptions.push(<SidebarMenu params={element} />);
	  // console.log(element);
	});

  }

  render() {
		return(
				<aside>
					<ul>
				      <li><i class="material-icons">face</i>Dashboard</li>
				      <li>Components</li>
				      <li>Widgets<i className="fas fa-chevron-right flecha"></i></li>
				        <ul className="subboton">
				          <li>Desk</li>
				        </ul>
				      <li>Metrics</li>
				      <li>Tables<i className="fas fa-chevron-right flecha"></i></li>
				        <ul className="subboton">
				          <li>Sales</li>
				        </ul>
				      <li>Timeline</li>
				    </ul>
				</aside>
		);
  	}

}

export default Sidebar;