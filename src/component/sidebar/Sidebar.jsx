import './sidebar.scss'
import logo from './logo.svg';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span> <img src={logo} alt="Logo" /></span>
      </div>
      <hr className='hr' />
      <div className='center'>
      <ul>
       
        <li>
        {/* <DashboardIcon className='icons' /> */}
         <DashboardTwoToneIcon />
          <span>Dashboard</span>
        </li>
        <li>
         <VideogameAssetIcon />
          <span>Trainings</span>
        </li>
        <li>
        <PeopleAltTwoToneIcon />
          <span>Dashboard</span>
        </li>
        <li>
          <FmdGoodIcon />
          <span>Users</span>
        </li>
        <li>
        <FmdGoodIcon />
          <span>Analytics</span>
        </li>
        <li>
        <FmdGoodIcon />
          <span>My Account</span>
        </li>
        <li>
        <FmdGoodIcon />
          <span>Support</span>
        </li>
        
      </ul>
     </div>
    </div>
  )
}

export default Sidebar
