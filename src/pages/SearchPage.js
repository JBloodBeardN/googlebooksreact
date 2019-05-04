import React, { Component } from "react";
import ResultsTable from "../components/ResultsTable";
import API from "../utils/API";
import ResultsCard from "../components/ResultsCard";
import SearchForm from "../components/SearchForm";

class SearchPage extends Component {
    state = {
        searchResults: []
    };


    handleFormSubmit(event) { event.preventDefault(); };

    handleOnChange() { };

    handleViewMovie(event) { console.log(event.target) };

    handleSaveMovie(event) { console.log(event.target) };

    handleDeleteMovie(event) { console.log(event.target) };

    componentDidMount(){
        // probably needs a initial load of api data into state... idk
    }

    render() {
        return (
            <div>
                <SearchForm handleFormSubmit={this.handleFormSubmit} />

                <ResultsTable tableName="Search Results">
                    {this.state.searchResults.forEach(function (element) {
                        return <ResultsCard
                            title={element.title}
                            link={element.link}
                            image={element.image}
                            description={element.description}
                            authors={element.authors} />
                    })}

                </ResultsTable>
            </div>
        );
    }
}

export default SearchPage;
