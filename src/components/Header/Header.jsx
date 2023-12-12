import './Header.css';

import reactImage from '../../assets/react-core-concepts.png';
const reactDescription = ["Fundamental", "Core", "Crucial"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() { // compoment Function Must start with Upper-Case Letter & return a Renderable Value "like html code"
    const description = reactDescription[genRandomInt(2)];
  
    return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
  }