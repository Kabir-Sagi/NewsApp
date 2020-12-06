/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import "./SearchComp.css";
import React from "react";
import {Link} from 'react-router-dom'


function template() {
  return (
    <div className="search-comp bg-light px-5 m-4">
   <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2"  type="search" placeholder="Search News" size="70" onChange={(e)=>{
        this.setState({
         ...this.state,
         searchData:e.target.value

        })
      }} />
   <Link to='/'> <button class="btn btn-success my-2 my-sm-0" type="submit" onClick={()=>this.getdata()}>Search</button></Link>
    </form>
    {
   this.state.articles.length >1 ?this.state.articles.map((element)=>{
      return (
        <>
         <div className="col-md-4">
           <div className="card bg-dark text-white mt-4">
             <div className="card-header m-0 p-0">
             <img height="100" src={element.urlToImage}  className="img-fluid" />
             </div>
             <div className="card-body">
             <h2 className="card-title mt-3"> {element.source.name}</h2>
     
      <p className="card-text">{element.description}</p>
      <a href={element.url} target="_blank" className="btn btn-primary">Read More</a>
             </div>
           </div>
         </div>
            
        </>
      )
   }):<h2></h2>
 }
    
    </div>
  );
};

export default template;
