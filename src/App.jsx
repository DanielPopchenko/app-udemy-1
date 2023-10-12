import keyConceptsImage from './assets/images/key-concepts.png';
import Concepts from './components/concepts/Concepts';
import { concepts } from './utils/consepts';

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>

      <Concepts concepts={concepts} />
    </div>
  );
}

export default App;
