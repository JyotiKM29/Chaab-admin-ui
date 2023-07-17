import DonutChart from './DonutChart'
import './piechartChapter.scss'

const PiechartChapter = () => {
  return (
    <div className='piechartChapter'>
    <h3 className='about'>Chapter Wise Status</h3>
    <div className='chart'>
      <DonutChart />
      

    </div>
    <div className='type'>
      <ul>
        <li className='li'>
          <div className='colorPieArea'></div>
          <span>Finished Training</span>
        </li>
        <li className='li'>
          <div className='colorPieArea'></div>
          <span>Chapter B</span>
        </li>
        <li className='li'>
          <div className='colorPieArea'></div>
          <span>Haven't Started Yet</span>
        </li>
        <li className='li'>
          <div className='colorPieArea'></div>
          <span>Chapter A</span>
        </li>
        <li className='li'>
          <div className='colorPieArea'></div>
          <span>Chapter C</span>
        </li>
        
      </ul>
    </div>
      
    </div>
  )
}

export default PiechartChapter
