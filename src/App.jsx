import { Navbar } from './components/Common/NavBar/Navbar';
import { Home } from './components/Home/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <div>
          <Home />
        </div>
      </div>

    </ThemeProvider>
  );
}

export default App;
