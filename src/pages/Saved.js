import React, { Component } from "react";
import ResultsTable from "../components/ResultsTable";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";

class Saved extends Component {
  state = {
    Savedbooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ Savedbooks: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div>
            <ResultsTable tableName="Saved Books">
{this.state.savedBooks.forEach(function(element){
   return <ResultsCard 
    title={element.title}
    link={element.link}
    image={element.image}
    description={element.description}
    authors={element.authors}/>
})}
</ResultsTable>
</div>
    );
  }
}

export default Saved;