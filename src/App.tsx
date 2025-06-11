import './App.scss';
import {TextField} from './components/TextField/TextField';

function App() {

  return (
    <>
      <TextField
        placeholder="Placeholder"
        label="Label"
      />
      <p></p>
      <TextField
        placeholder="Placeholder"
        label="Label"
        error="Error text"
      />
      <p></p>
      <TextField
        placeholder="Placeholder"
        label="Disabled"
        disabled={true}
      />
    </>
  );
}

export default App
