import './App.css';
import Header from './components/Header';
import SecondaryHeader from './components/SecondaryHeader';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import {TaskProvider} from './TaskContext';

const App = () => {
  const sharedValue = "this is a shared value";
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
