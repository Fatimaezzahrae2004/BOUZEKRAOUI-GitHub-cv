import "./App.css";
import User from "./components/User";
import Skills from "./components/Skills";
import Profil from "./components/Profil";
import FormationsExperiences from "./components/FormationsExperiences";
import PiedsDePage from "./components/PiedsDePage";


function App() {
  
  return (
    
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
            
            <User />
            <Skills />
          </div>
      <div className="main">
            <Profil />
            <FormationsExperiences />
            <p>Lien de formulaire:<a href="file:///C:/Users/HP/Desktop/formulaire/Vite%20+%20React%20+%20TS.html">file:///C:/Users/HP/Desktop/formulaire/Vite%20+%20React%20+%20TS.html</a></p>
      

      <div className="footer">
            <PiedsDePage/>
          </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;