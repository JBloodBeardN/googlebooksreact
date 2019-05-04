import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
 <NavBar />
 <Header style="border: 1px black solid">{title, instructions}</Header>

 <ResultsTable />
	<Router>
	 <Route exact path ="/" components={SearchPage}/>
	 <Route exact path ="/saved" components={Saved}/>
	</Router>
 </div>
  );
}

export default App;
