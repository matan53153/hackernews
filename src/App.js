import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      information: []
    }
  }

  componentDidMount() {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then(response => response.json())
      .then(answer => {
        this.setState({
          information: answer.hits
        })
      })
  }

  render() {
    console.log(this.state.information)
    return (
    <div className="Main">
      <Header />
      {this.state.information.map(function(eachInfo) {
        return (
          <Body 
            points={eachInfo.points} 
            title={eachInfo.title}
            author={eachInfo.author}
            comments={eachInfo.num_comments}
            url={eachInfo.url}
          />
        )
      })}
      <footer className="Footer">About  •  Settings  •  Help  •  API  •  Hacker News  •  Fork/Contribute  •  Status  •  Cool apps</footer>
    </div>
    )
  }
}



export default App