import logo from './logo.svg';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Name: Ayush Bhardwaj</h1>
      <h2>Date: {currentDate}</h2>
      <h3>University: Amity University</h3>
    </div>
  );
}

export default App;
