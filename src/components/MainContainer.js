import React, { Component, Fragment } from 'react'
import Barchart from './charts/Barchart';
import AccountTable from './charts/AccountTable';
import MainChart from "./charts/MainChart";
import MainTable from "./MainTable"

class MainContainer extends Component {
      
    render() {
          const { activefn, activeState, secActivefn}=this.props;
        return (
            <Fragment>
                 <div className="navbar">
                 <div className="hamburger" onClick={activefn}>
                        <i className="fas fa-bars"></i>      
                </div>
                <ul className="menu">
                      <li><a href="#" className="active">dashboard</a></li>
                      <li><a href="#">business management</a></li>
                      <li><a href="#">resources</a></li>
                </ul>
                <div className="right_menu">
                    <ul>
                        <li onClick={secActivefn}><span className="circle"><i className="fas fa-user"></i></span>
                           <div className={`profile_dd ${activeState}`}>
                               <div className="dd_item">Update Profile</div>
                               <div className="dd_item">Change Password</div>
                               <div className="dd_item">Logout</div>
                           </div>
                        </li>
                    </ul>
                </div>
                 </div>
                 <div className="content">
                     <div className="top-container">

                             <div className="grapharea">
                                 <div className="main-graph">
                                     <MainChart/>
                                 </div>
                        
                             </div>
                                <div className="top_box top_box_a">
                                     <div className="chart-title">
                                         <h4>Account watchlist</h4>
                                     </div>
                                     <div className="table1">
                                          <AccountTable/>
                                     </div>
                                    
                                </div>
                                <div className="top_box top_box_b">
                                <div className="chart-title">
                                         <h4>Total cash in and out</h4>
                                     </div>
                                   <div className="chart-cont" style={{padding:'6px 0'}}>
                                      <Barchart />
                                    </div>
                                </div>
                
                   </div> 
                    <div className="lg-table">
                          <MainTable />
                    </div>
                </div>
              </Fragment>
        )
    }
}

export default MainContainer;