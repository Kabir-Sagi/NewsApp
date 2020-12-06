import React    from "react";
import template from "./SearchComp.jsx";
import getNewsData from '../../Services/ServerData'

class SearchComp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
     
       searchData:'',
       articles:[]
    }
  }
  getdata = ()=>{
     if(this.state.searchData === '') {
       alert("Enter News tha you want")
     }
   
    getNewsData(`https://newsapi.org/v2/everything?q=${this.state.searchData}&apiKey=2c55f37584b34bf68d8e10c6313d3d16`)
    .then((res)=>{
      
       console.log(res)
       this.setState({
         articles:res.data.articles
       })
    })
  }

  
  render() {
    return template.call(this);
  }
}

export default SearchComp;
