import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const data = [
    {
      month: "Jan",
      "Active User": 4000,
    },
    {
      month: "Feb",
      "Active User": 3000,
    },
    {
      month: "March",
      "Active User": 2000,
    },
    {
      month: "Apr",
      "Active User": 3000,
    },
    {
      month: "May",
      "Active User": 4000,
    },
    {
      month: "Jun",
      "Active User": 3000,
    },
    {
      month: "Jul",
      "Active User": 2000,
    },
    {
      month: "Agu",
      "Active User": 1000,
    },
    {
      month: "Sep",
      "Active User": 2000,
    },
    {
      month: "Oct",
      "Active User": 3000,
    },  
    {
      month: "Nov",
      "Active User": 4000,
    },
    {
      month: "Dec",
      "Active User": 4000,
    },
  ];

  return (
    <div className='chart'>
      <h3 className='c-title'>User Analytics</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={"month"} stroke='black' />
          <Line
            type='monotone'
            dataKey='Active User'
            stroke='var(--maincolor)'
            strokeWidth="2"
       />
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
