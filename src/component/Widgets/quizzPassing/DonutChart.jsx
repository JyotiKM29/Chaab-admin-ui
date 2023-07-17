import {
    Chart as ChartJS ,
    ArcElement,
    Tooltip,
    Legend
}
from 'chart.js'
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const DonutChart = () => {
    const data ={
        labels : ['Passed','failed'],
        datasets: [
            {
                label:'poll',
                data:[1423,134],
                backgroundColor:['green','red']
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
              position: 'left',
              labels: {
                font: {
                  weight: 'bold',
                },
              },
            },
          },
    }
  return (
    <div style={{height:'100%' ,width:"100%"}}>
      <Doughnut
      data ={data}
      option= {options}
      >

      </Doughnut>
    </div>
  )
}

export default DonutChart