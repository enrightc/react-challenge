import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple"
import NavBarForm from "./components/NavBarForm"
import Contents from "./components/Contents"



function App() {
  return (

  <div className={css.App}>
    { <Sidebar /> }
    {/* { <NavBarSimple /> } */}
    { <NavBarForm />}
    { <Contents />}
  </div>

  );
}

export default App;