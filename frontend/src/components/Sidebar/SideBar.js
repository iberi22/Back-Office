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

  hideAside= ()=>{
    let aside = document.getElementById('aside')
    , parentContent = document.getElementById('parentContent')    
    aside.setAttribute("style","");
    setTimeout(function(){ parentContent.setAttribute("style",""); },800);
  }

  render() {
		return(
				<aside id="aside" >
          <div className="closeAside">
            <i className="material-icons" onClick={this.hideAside.bind()}>close</i>
          </div>
					<ul>
              
              {this.state.options}
			    </ul>
				</aside>
		);
  	}

}

export default Sidebar;