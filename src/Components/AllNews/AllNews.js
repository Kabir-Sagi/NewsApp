import React    from "react";
import template from "./AllNews.jsx";
import getNewsData from '../../Services/ServerData'

class AllNews extends React.Component {
 
  constructor(props) {
    super(props)
  
    this.state = {
       country:this.props.country,
       articles:[]
    }
  }

  
 
 

  componentDidMount() {
   
       getNewsData(`https://newsapi.org/v2/top-headlines?country=us&apiKey=2c55f37584b34bf68d8e10c6313d3d16`)
       .then((res)=>{
         
          console.log(res)
          this.setState({
            articles:res.data.articles
          })
       },(err)=>{
         alert("Error from server side" +err)
       })
  }
  render() {
   
    return template.call(this);
  }
}

export default AllNews;
