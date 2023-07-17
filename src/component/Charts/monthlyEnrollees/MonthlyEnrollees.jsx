import './monthlyEnrollees.scss'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Course from './course/Course'

const MonthlyEnrollees = () => {
  return (
    <div className='monthlyactivity'>
      <h3 className='about'>
        Monthly Training Activity
      </h3>
      <div className='subAbout'>
        <ArrowUpwardIcon className='arrow'/>
        <h4>16% more enrollees this month</h4>
      </div>

      <div className='courseName'>
         <Course name="a"/>
         <Course name="b"/>
         <Course name="c"/>
         
      </div>

    </div>
  )
}

export default MonthlyEnrollees
