import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} id='teste'>
        Olá mundo!
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem at
        iure, quasi eveniet dolores expedita eaque facere, laudantium error
        necessitatibus ea sequi beatae quibusdam itaque quam autem ab
        perspiciatis quas.
      </p>
    </>
  );
}
