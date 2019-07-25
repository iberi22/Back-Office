import React, { Component } from 'react';
import SidebarMenu from './SideBarMenu'
import './SideBar.css';

class Sidebar extends Component {

  constructor(props){
  	super(props);

  	let options = [
  		{
  			icon : 'dashboard',
  			text : 'Dashboard',
  		},
  		{
  			icon : 'settings',
  			text : 'Configuracion'
  		}
  	]
  	,	arrayOptions = []
  	,	i = 1
    options.forEach(function(element) {
      arrayOptions.push(<SidebarMenu key={i} params={element} />);
      i++
	  // console.log(element);
    });
    this.state = {
      options : arrayOptions,
    }
    // this.setState({
    //   options : arrayOptions
    // });

  }

  render() {
		return(
				<aside id="aside" >
					<ul>
              {this.state.options}
			    </ul>
				</aside>
		);
  	}

}

export default Sidebar;