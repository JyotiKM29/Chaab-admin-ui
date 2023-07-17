import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChartQuiz = () => {
  const data = {
    labels: ['Passed', 'Failed'],
    datasets: [
      {
        label: 'Poll',
        data: [1423, 134],
        backgroundColor: ['green', 'red'],
      },
    ],
  };
 
  const options = {
    // plugins: {
    //   legend: {
    //     position: 'right',
        
    //     labels: {
    //       font: {
          
    //         weight: 'bold',
    //       },
          
    //     },
    //   },
    // },
  };

  

  return (
    <div style={{ height: '90%', width: '100%' ,padding:'0' , margin:'0' }}>
      <Doughnut  data={data} options={options} />
      
    </div>
  );
};

export default DonutChartQuiz;
