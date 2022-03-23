import { getUsers } from "../getUsers";
import React, {Component} from 'react';

const users=getUsers(100);

class SearchBar extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        search: []
      }
    }
  
    render() {
      let options;
      if (this.state.search.length) {
        const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
        options = users.filter(option => 
          option.match(searchPattern)
        );
      } else {
        options = users;
      }
    
      return (
        <div>
          <input type="text" onChange={(e) => this.setState({search: e.target.value.split(' ')})}/>
          <ul>
              {options.map((option, i) => 
                <li key={option+i}>{option}</li>
              )}
          </ul>
        </div>
      )
    }
  }
  
export default SearchBar;