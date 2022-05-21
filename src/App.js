
import './App.css';
import ProfilePhoto from './component/Profile/ProfilePhoto';
import FullName from './component/Profile/FullName';
import Adress from './component/Profile/Adress';
function App() {
  return (
    <div >
     
     <section id="about" className="about">
     <div className="container">
       <FullName/>
       <ProfilePhoto/>
       <Adress/>
     </div>
     </section>
    </div>
  );
}

export default App;
