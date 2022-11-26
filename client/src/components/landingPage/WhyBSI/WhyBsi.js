import React from 'react'
import {AutoGraph,
        CloudCircleOutlined,
        BackupTable,Category,
        } from '@mui/icons-material'
        
const WhyBsi = () => {
  return (
    <div className="whyBsi ">
            <div className="container ">
                <h1 className="text-center py-2">Why Digital Ethiopia?</h1>
               
                <div className="grid">
                <div className="why-card my-2">
                        <div className="icon" >
                            <AutoGraph className='why-icon'/>
                            <p className='why-title'>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid et veritatis praesentium itaque non laudantium error accusantium vitae. Iure, odio? </p>
                    </div>
                    
                    <div className="why-card my-2">
                        <div className="icon" >
                            <Category className='why-icon'/>
                            <p className='why-title'>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid et veritatis praesentium itaque non laudantium error accusantium vitae. Iure, odio? </p>
                    </div>
                    
                    <div className="why-card my-2">
                        <div className="icon" >
                            <BackupTable className='why-icon'/>
                            <p className='why-title'>Lorem ipsum dolor sit amet </p>
                        </div>
                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid et veritatis praesentium itaque non laudantium error accusantium vitae. Iure, odio? </p>
                    </div>

                    <div className="why-card my-2">
                        <div className="icon" >
                            <CloudCircleOutlined className='why-icon'/>
                            <p className='why-title'>Lorem ipsum dolor sit consectetur </p>
                        </div>
                        <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid et veritatis praesentium itaque non laudantium error accusantium vitae. Iure, odio? </p>
                    </div>
                    
                </div>
            </div>
            
        </div>
  )
}

export default WhyBsi