import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    //creating handleTermChange() 
    handleTermChange(e){
        this.setState({term: e.target.value});
    }

    search(term){
        this.props.onSearch(this.state.term);
    }
    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
          </div>
        );
    }
}

export default SearchBar;