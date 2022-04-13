import './App.css';
import MyLineChart from './Components/LineChart/MyLineChart';
import MyAxiosChart from './Components/MyAxiosChart/MyAxiosChart';



function App() {
  const data = [
    {
      name: 'Page A',
      sale: 4000,
      purchase: 2400,
      code: 2400,
    },
    {
      name: 'Page B',
      sale: 3000,
      purchase: 1398,
      code: 2210,
    },
    {
      name: 'Page C',
      sale: 2000,
      purchase: 9800,
      code: 2290,
    },
    {
      name: 'Page D',
      sale: 2780,
      purchase: 3908,
      code: 2000,
    }
  ];

  return (
    <div className="App">
      <MyLineChart data={data}></MyLineChart>
      <MyAxiosChart></MyAxiosChart>
    </div>
  );
}

export default App;
