import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import NavBar from "../components/landingPage/navbar/NavBar"
import ShowCase from "../components/landingPage/showCase/ShowCase"
import WhyBsi from "../components/landingPage/WhyBSI/WhyBsi"
import Footer from "../components/landingPage/Footer"
import Departments from '../components/department/Departments'
import DepartmentDtail from '../components/department/DepartmentDtail'
import UnderItsManagement from '../components/department/UnderItsManagement'
const LandingPage = () => {
  return (<>
        <NavBar/>
        <Routes>
          <Route path="/" element={<><ShowCase/> <WhyBsi/> <Footer/></> }/>
          <Route path="/departments" element={<Departments/> }/>
          <Route path="/department/detail/:id" element={<DepartmentDtail/> }/>
          <Route path="/underitsmanagement/:id" element={<UnderItsManagement/> }/>

        </Routes>
        </>
  )
}

export default LandingPage