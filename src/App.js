import './App.css';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { HeaderLeftSide } from './components/HeaderLeftSide';
import { HeaderRightSide } from './components/HeaderRightSide';
import { HomePage } from './components/HomePage';
import { MainNews } from './components/MainNews';
import { LastNews } from './components/LastNews';
import { MiniNews } from './components/MiniNews';
import { MiniNewsContainer } from './components/MiniNewsContainer';
import { Menu } from './components/Menu';

function App() {
  
  return (
    <Container>
      <Header>
        <HeaderLeftSide/>
        <HeaderRightSide>
          <Menu/>
        </HeaderRightSide>
      </Header>
      <HomePage>
        <MainNews/>
        <LastNews/>
      </HomePage>
      <MiniNewsContainer>
      <MiniNews/>
      </MiniNewsContainer>
    </Container>
  );
}

export default App;
