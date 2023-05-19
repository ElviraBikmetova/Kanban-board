import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import data from './mock.json'

function App() {
  const [tasks, setTasks] = useState(data)
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
