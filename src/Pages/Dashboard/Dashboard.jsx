import { BarChart, PieChart } from "@mui/icons-material";
import Header from "../../component/Header/Header";
import AreaChart from "../../component/Widgets/areaChart/AreaChart";
import Sidebar from "../../component/sidebar/Sidebar";
import "./dashboard.scss";

import PiechartChapter from "../../component/Widgets/piechartChapter/PiechartChapter";
import BarDailyWorkers from "../../component/Widgets/barDailyWorkers/BarDailyWorkers";
import MonthlyEnrollees from "../../component/Widgets/monthlyEnrollees/MonthlyEnrollees";
import PieQuizPassing from "../../component/Widgets/quizzPassing/PieQuizPassing";
import BarDailyTraining from "../../component/Widgets/barDailyTC/BarDailyTraining";

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
