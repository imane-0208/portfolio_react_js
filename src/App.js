
import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Main from "./views/portfolio";


function App() {
  return (
    <Router>

<div>

      <Routes>


        <Route exact path={"/"}      element={<Main></Main>}/>


        
      </Routes>
</div>
    </Router>
    
  );
}

export default App;
