import React from 'react';
class Searchbar extends React.Component {
    state= {
        searchterm:""
    }
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
      
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
            console.log(this.state.searchterm)
            this.props.searchemp(this.state.searchterm)
      };

    render(){
        return( <div>

            <form className="form">
          <input
            value={this.state.searchterm}
            name="searchterm"
            onChange={this.handleInputChange}
            type="text"
            placeholder="searchterm"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        </div>
        )
    }
}
export default Searchbar;