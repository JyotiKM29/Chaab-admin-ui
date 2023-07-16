import { BarChart } from "@mui/icons-material";
import Header from "../../component/Header/Header";
import AreaChart from "../../component/Widgets/areaChart/AreaChart";
import Sidebar from "../../component/sidebar/Sidebar";
import "./dashboard.scss";
import PieChart1 from "../../component/Widgets/piechart1/PieChart1";
import Bar14Days from "../../component/Widgets/14days/Bar14Days";
import MonthlyActivity from "../../component/Widgets/monthlyAct/MonthlyActivity";
import QuizPassing from "../../component/Widgets/quizzPassing/QuizPassing";
import DailyTC from "../../component/Widgets/DailyTC/DailyTC";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="container">
        <Header />
        <div className="widgets">
          <div className="row1">
            <AreaChart type="training"
            />
            <AreaChart type="video" />
            <AreaChart type="quiz"/>
            <AreaChart type="days" />
          </div>

          <div className="row2">
            <PieChart1 />
            <Bar14Days />
          </div>

          <div className="row3">
             <MonthlyActivity />
             <QuizPassing />
             <DailyTC />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
