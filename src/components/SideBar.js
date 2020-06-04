import React ,{Component} from 'react'
import profile from "../images/profile.png"




class Sidebar extends Component{
    state={
        activeClass:"",
        secondActive:""
    }
    showToggle= ()=>{ 
        if(this.state.activeClass===""){
            this.setState({
                activeClass:"active",
                secondActive:""
            })
        }else{
            this.setState({
                activeClass:"",
                secondActive:""
            })
          }
        }

    secondToggle= ()=>{ 
        if(this.state.secondActive===""){
            this.setState({
                activeClass:"",
                secondActive:"active"
            })
        }else{
            this.setState({
                activeClass:"",
                secondActive:""
            })
          }
        }



           
      

       
    /* secondToggle =()=>{
         if(this.state.activeClass==="active"){
             this.setState({
                 activeClass:'',
                 secondActive:"active"

             })
         }else if(this.state.activeClass===""){
             this.setState({
                 activeClass:"active",

             })
         }
     }*/
           
    
    render(){
        const { activeClass,secondActive }=this.state;
        const {removeMenu}=this.props;
        return(
            <div className="sidebar_inner">
                <div className="close" onClick={removeMenu}>
                <i className="fas fa-times"></i>
                </div>
                 <div className="profile_info">
                     <div className="profile_img">
                        <img src={profile} alt="profile image"/>
                     </div>
                     <div className="profile_data">
                         <p className="name">mikey johnson</p>
                         <span><i className="fas fa-map-marker-alt"></i>taxas, usa</span>
                     </div>
                 </div>
                 <ul className="siderbar_menu">
                       <li className="active">
                           <a href="#">
                               <div className="icon"><i className="fas fa-laptop"></i></div>
                               <div className="title">Dashboard</div>
                           </a>
                       </li>
                       <li>
                           <a href="#">
                               <div className="icon"><i className="fas fa-money-check-alt"></i></div>
                               <div className="title">Expenses</div>
                           </a>
                           
                       </li>
                       <li  className={activeClass} onClick={this.showToggle}>
                           <a href="#">
                               <div className="icon"><i className="fas fa-file-invoice-dollar"></i></div>
                               <div className="title">Accounting</div>
                               <div className="arrow"><i className="fas fa-chevron-down"></i></div>
                           </a>
                            <ul className="accordion">
                                <li><a href="#">pay bill</a></li>
                                <li><a href="#">invoicing</a></li>
                                <li><a href="#">accounting report</a></li>
                                <li><a href="#">purchase order</a></li>
                            </ul>
                       </li>
                       
                       <li className={secondActive} onClick={this.secondToggle}>
                           <a href="#" id="invent">
                               <div className="icon"><i className="fas fa-warehouse"></i></div>
                               <div className="title">Inventory</div>
                               <div className="arrow"><i className="fas fa-chevron-down"></i></div>
                           </a>
                           <ul className="accordion">
                                <li><a href="#">product mag</a></li>
                                <li><a href="#">resources mag</a></li>
                               
                                
                            </ul>
                       </li>
                       <li>
                           <a href="#">
                               <div className="icon"><i className="fas fa-archive"></i></div>
                               <div className="title">Assets</div>
                               <div className="arrow"><i className="fas fa-chevron-down"></i></div>
                           </a>
                           <ul className="accordion">
                                <li><a href="#">new assets</a></li>
                                <li><a href="#">registered asset</a></li>
                                <li><a href="#">sold and disposed </a></li>
                                
                            </ul>
                       </li>
                       <li>
                           <a href="#">
                           <div className="icon"><i className="fas fa-cog"></i></div>
                               <div className="title">setting</div>
                           </a>
                       </li>
                 </ul>
            </div>
        )
    }
}


export default Sidebar;