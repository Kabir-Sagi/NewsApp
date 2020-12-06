import React    from "react";
import template from "./TechnologyComp.jsx";
import getNewsData from '../../Services/ServerData'

class TechnologyComp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       articles:[]
    }
  }
  componentDidMount() {
    getNewsData(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2c55f37584b34bf68d8e10c6313d3d16`)
    .then((res)=>{
      
       console.log(res)
       this.setState({
         articles:res.data.articles
       })
    },(err)=>{
      alert(err)
    })
  }
  render() {
    return template.call(this);
  }
}

export default TechnologyComp;
