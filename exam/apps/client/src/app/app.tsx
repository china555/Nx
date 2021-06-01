import axios from 'axios';
import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  const handler = async () => {
    const responseData = await axios.get('http://localhost:3333/api');
    console.log(responseData);
  };
  return (
    <div className={styles.app}>
      <button onClick={handler}>Click me</button>
    </div>
  );
}

export default App;
