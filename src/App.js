import React from 'react'

function SearchBar(props) {
  return <input type="text" onChange={props.onSearch} />
}

function ListItem(props) {
  return <div>{props.text}</div>
}

class App extends React.Component {
  render() {
    var results = ['Item 1', 'Item 2']
    return (
      <div>
        <SearchBar
          onSearch={function(event) {
            var value = event.target.value
            console.log('new value :', value)
          }}
        />
        {results.map(item => <ListItem text={item} />)}
      </div>
    )
  }
}

export default App
