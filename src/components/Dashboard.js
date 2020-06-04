import React, {Component, Fragment} from 'react'
import Sidebar from './SideBar'
import MainContainer from './MainContainer'


class Dashboard extends Component{
    state={
        menuActive:"",
        showDropdown:""
    }


    showMenu=()=>{
        if(this.state.menuActive===""){
            this.setState({
                menuActive:"active"
            })
        }else{
          this.setState({
              menuActive:""
          })
        }
    }
    showDrop=()=>{
        if(this.state.showDropdown===""){
            this.setState({
                menuActive:"",
                showDropdown:"active"
            })
        }else{
          this.setState({
              menuActive:"",
              showDropdown:""
          })
        }
    }
    hidMenu=()=>{
        if(this.state.menuActive==="active"){
            this.setState({
                menuActive:""
            })
        }
    }
    render(){
        const {menuActive}=this.state
        return(
             <Fragment>
               <div className={`wrapper ${menuActive}`}>
                   <div className="sidebar">
                       <div className="bg_shadow" onClick={this.hidMenu}></div>
                        <Sidebar  removeMenu={this.hidMenu}/>
                   </div>
                   <div className="main-container">
                     <MainContainer activefn={this.showMenu} secActivefn={this.showDrop} activeState={this.state.showDropdown}/>
                   </div>
                  
               </div>
             </Fragment>
        )
    }
}

export default Dashboard;