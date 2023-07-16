import "./areachart.scss";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";

const AreaChart = ({ type }) => {
  let data;

  switch (type) {
    case "training":
      data = {
        title: "In Training Workers",
        totalCount: 3354,
        percentage: 20,
        percentageType: "positive",
        numbercount: 234,
      };
      break;

    case "video":
      data = {
        title: "Video Watch-Time (Hrs)",
        totalCount: 2433,
        percentage: 20,
        percentageType: "negative",
        numbercount: 435,
      };
      break;

    case "quiz":
      data = {
        title: "% Workers Passing Quiz",
        totalCount: 95,
        percentage: 20,
        percentageType: "positive",
        numbercount: 24,
      };
      break;

    case "days":
      data = {
        title: "Avg. Days Taken",
        totalCount: 6,
        percentage: 20,
        percentageType: "positive",
        numbercount: 3,
      };
      break;

      deafult: break;
  }

  return (
    <div className="areachart">
      <h3 className="about"> {data.title}</h3>
      <div className="contain">
        <div className="left">
          <div className="totalCount">{data.totalCount.toLocaleString()}</div>
          <div className="growth">
            <div className={`percentage ${data.percentageType}`}>
              <ShowChartOutlinedIcon />
              {data.percentage}%
            </div>
            <div className="numbercount">{data.numbercount}</div>
          </div>
        </div>
        <div className="right">{/* chart */}</div>
      </div>
    </div>
  );
};

export default AreaChart;
