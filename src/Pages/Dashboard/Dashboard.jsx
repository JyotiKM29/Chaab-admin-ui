import { BarChart, PieChart } from "@mui/icons-material";
import Header from "../../component/Header/Header";
import AreaChart from "../../component/Charts/areaChart/AreaChart";
import Sidebar from "../../component/sidebar/Sidebar";
import "./dashboard.scss";

import PiechartChapter from "../../component/Charts/piechartChapter/PiechartChapter";
import BarDailyWorkers from "../../component/Charts/barDailyWorkers/BarDailyWorkers";
import MonthlyEnrollees from "../../component/Charts/monthlyEnrollees/MonthlyEnrollees";
import PieQuizPassing from "../../component/Charts/quizzPassing/PieQuizPassing";
import BarDailyTraining from "../../component/Charts/barDailyTC/BarDailyTraining";

const Dashboard = () => {
  return (
    <div className="dashboard">
     
      <Sidebar  className='sidebar'/>
      <div className="container">
        <Header />
        <div className="widgets">
          <div className="row1">
            <AreaChart type="training" />
            <AreaChart type="video" />
            <AreaChart type="quiz" />
            <AreaChart type="days" />
          </div>

          <div className="row2">
            <PiechartChapter />
            <BarDailyWorkers />
          </div>

          <div className="row3">
            <MonthlyEnrollees />
            <PieQuizPassing />
            <BarDailyTraining />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
