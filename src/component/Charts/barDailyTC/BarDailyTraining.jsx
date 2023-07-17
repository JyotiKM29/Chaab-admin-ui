import DailyTrainingChart from './DailyTrainingChart'
import './barDailyTraining.scss'

const BarDailyTraining = () => {
  return (
    <div className='dailytraining'>
      <div className='about'>
        <h3>Daily Training Completions</h3>
        <h3>Last 7 Days</h3>
      </div>

      <div className='barchart'>
      <DailyTrainingChart />
      </div>
    </div>
  )
}

export default BarDailyTraining
