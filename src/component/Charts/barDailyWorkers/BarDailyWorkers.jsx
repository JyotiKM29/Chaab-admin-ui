import BarChartDW from './BarChartDW'
import './barDailyWorkers.scss'


const BarDailyWorkers = () => {
  return (
    <div className='barchart'>
      <div className='heading'>
        <h3>Last 14 Days Active Workers in Training</h3>
        <h3>Last 14 Days</h3>
      </div>

       {/*chart  */}
       <div className='barchart'>
         <BarChartDW />
      </div>
     
    </div>
  )
}

export default BarDailyWorkers
