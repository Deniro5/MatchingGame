import React from 'react';

const Card = props => {

    return (
      <div onClick = {props.click.bind(this)} className={"flip-card " + (props.showImage ? "rotate" : "") }>
      <div className={"flip-card-inner " + (props.showImage ? "rotate" : "") }>
        <div class="flip-card-front">
          <h1> ? </h1>
        </div>
        <div class="flip-card-back">
          <img alt = "" src= {props.imgsrc}/>
        </div>
      </div>
    </div>
    
    
    );
  }


export default Card;
