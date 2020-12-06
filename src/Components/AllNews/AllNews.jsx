/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import "./AllNews.css";
import React from "react";


function template() {
  return (
    <div className="all-news">
      <div className="container-fluid">
        <div className="row  text-white">

       
      
      
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
            {/* <div className="card mt-3">
            <div className="row">
              <div className="col-sm-4">
                <img height="100" src={element.urlToImage}  className="img-fluid" />
              </div>
              <div className="col-sm-8">
      <h2 className="card-title mt-3"> {element.source.name}</h2>
      <h4 className="card-title">{element.author}</h4>
      <p className="card-text">{element.description}</p>
      <a href={element.url} target="_blank" className="btn btn-primary">Read More</a>
              </div>

            </div>
            </div> */}
        </>
      )
   }):<h2>No Data</h2>
 }
      </div>
      </div>
 </div>
  
  );
};

export default template;
