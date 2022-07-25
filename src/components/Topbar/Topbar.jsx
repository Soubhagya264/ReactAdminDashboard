import React from 'react'
import "./Topbar.css"
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Language from '@mui/icons-material/Language';
import Settings from '@mui/icons-material/Settings';

const Topbar = () => {
    return (
    <>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <div className="logo">
                        AUTDashboard
                        </div>


                    </div>
                    <div className="topRight">
                        <div className="IconContainer">
                          
                                <NotificationsNone/>
                                
                                <span className="topIconBadge">2</span>
                                
                                </div>

                                <div className="IconContainer">
                          
                                
                                <Language/>
                                <span className="topIconBadge">2</span>
                                
                                </div>
                                <div className="IconContainer">
                          
                                
                                <Settings/>
                                
                                
                                </div>
                                <div className="IconContainer">
                          
                                
                                <img src="" alt="" className="topAvtar"/>
                                
                                
                                </div>
                            
                               
                               
                            
                                


                    
                    </div>
                </div>
            </div>


                </>
                )
}

                export default Topbar
