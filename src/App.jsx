import './App.css'
import ChatList from './components/ChatList';
import ChatPlaceholder from './components/ChatPlaceholder';
import Sidebar from './components/sidebar';

function App() {

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />
      <ChatList />
      <ChatPlaceholder />
    </div>
  );
}

export default App
