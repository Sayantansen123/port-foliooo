import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Common/NavBar/Navbar';
import { Home } from './components/Home/Home';
import { ThemeProvider } from './context/ThemeContext';
import { About } from './components/About/About';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;
