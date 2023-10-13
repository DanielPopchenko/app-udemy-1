import Concepts from './components/concepts/Concepts';
import Header from './components/header/Header';
import { concepts } from './utils/consepts';

function App() {
  return (
    <div>
      <Header />
      <Concepts concepts={concepts} />
    </div>
  );
}

export default App;
