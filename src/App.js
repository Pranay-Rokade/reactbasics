import logo from './logo.svg';
import './App.css';
import Footer from './components/footer'
import Home from './components/home/home'
import PrimaryButton from './components/primary-button/primary-button'
import { Welcome } from './components/Welcome';
import HeadCounter1 from './components/HeadCounter1';
import HeadCounter3 from './components/HeadCounter3';

const Header = (props) => {
  return <h1>{props.title}</h1>;
}

// functional React component
const MyApp = () => {
  // JSX is returned
  const list = [
    "Amitabh",
    "Rekha",
    "Jaya"
  ];
  return <>
    {/* <Header title="My Title 2"/>
    <Home list={list}/>
    <PrimaryButton label="Click Me"/>
    <Footer notice="Copyright 2024 from App"/> */}
    <Welcome/>
    <HeadCounter1/>
    <HeadCounter3/>
  </>;
}

export default MyApp;
