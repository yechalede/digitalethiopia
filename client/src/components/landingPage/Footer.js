import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer py-1">
            <div className="container">
              <div className="footer-content">
                <ul className="flex footer-links">
                    <li><Link to='#' >FAQ</Link> <span style={{padding:"0 2px",color:"#8884d8"}}>|</span></li>
                    <li><Link to='#' >Privacy policy</Link><span style={{padding:"0 2px",color:"#8884d8"}}>|</span></li>
                    <li><Link to='#' >Terms of Service</Link></li> 
                </ul>
                <div className="copyright">
                        <p className="text-center">Copyright &copy; 2022 Digital Ethiopia,  LLC. All rights reserved.</p>
                </div>  
                </div> 
            </div>
        </div>
  )
}

export default Footer