import React from 'react'
import {AutoGraph} from '@mui/icons-material'

const ShowCase = () => {
  return (
      <div className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h2 className="head-text">
            We Are Crafting Your Dreams!
            </h2>
            <p className='showcase-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi quidem inventore velit maxime reiciendis quo officiis beatae consequatur illo 
            quod nemo temporibus.</p>
          </div>
          <div className="showcase-demo">
            <div className="showcase-card grid">
              <div className="showcase-demo-items">
                  <div className="items-icon-list flex">
                    <i>
                      <AutoGraph style={{fontSize:"102px"}}/>
                    </i>
                  </div>
                  
              </div>
              
            </div>
          </div>

        </div>
          
      </div>
  )
}

export default ShowCase