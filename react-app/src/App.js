import './css/App.css';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import {TaskProvider} from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
        <Header/>
        <SecondaryHeader/>
        <Sidebar/>
        <TaskList/>
    </TaskProvider>
  );
};

export default App;
