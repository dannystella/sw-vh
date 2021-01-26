
import { Container } from '@material-ui/core';
import { FilmsProvider } from './Contexts/FilmsContext';
import { PeopleProvider } from './Contexts/PeopleContext';
import { ViewProvider } from './Contexts/ViewContext';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavigateView from './Views/NavigateView'
import logo from './logo.svg';
import './App.css';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#272c34',
    },
    secondary: {
      main: '#FFFFFF	',
    },
  },
});

function App() {
  return (
    <ViewProvider>
      <FilmsProvider>
        <PeopleProvider>
          <Container className='container' maxWidth="md">
            <ThemeProvider theme={theme}>
              <div className='header'>
                <img style={{ height: '100px', textAlign: 'center' }} src={logo} className="App-logo" alt="logo" />
              </div>
              <NavigateView />
            </ThemeProvider>
          </Container>
        </PeopleProvider>
      </FilmsProvider>
    </ViewProvider>
  );
}

export default App;
