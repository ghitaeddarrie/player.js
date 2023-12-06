import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PlayersList from './PlayersList';
import AppNavbar from '../src/Component/AppNavbar';





function App() {
 return (
  <>
   <section className="py-4 container">
     <div className="d-flex justify-content-center  flex-wrap gap-4">
       <h1>Football Players</h1>
       <div>
           <PlayersList />
           <AppNavbar />
       </div>
     </div>
    </section>
  </>
 )
}

export default App;
