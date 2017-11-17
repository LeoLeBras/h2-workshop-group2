import React from 'react'

function SearchBar(props) {
  return <input type="text" onChange={props.onSearch} />
}

function ListItem(props) {
  return <div>{props.text}</div>
}

class App extends React.Component {
  state = { searchQuery: undefined }

  handleSearch = event => {
    var value = event.target.value
    this.setState({ searchQuery: value })
  }

  render() {
    console.log(this.state.searchQuery)
    var results = ['Item 1', 'Item 2']
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {results
          .filter(item => {
            if (this.state.searchQuery === undefined) {
              return true
            }
            return item.includes(this.state.searchQuery)
          })
          .map(function(item) {
            return <ListItem text={item} />
          })}
      </div>
    )
  }
}

export default App
