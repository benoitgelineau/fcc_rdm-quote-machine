import React from 'react';

const Buttons = props =>
 (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="text-center">
          <a
            id="tweet-quote"
            className="twitter"
            href={`https://twitter.com/intent/tweet?text=${props.tweet}`}
            target="_blank">
            <img src="twitter.png" alt="Twitter Logo"/>
          </a>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="text-center">
          <button id="new-quote" onClick={props.onClick}>New quote</button>
        </div>
      </div>
    </div>
  );

export default Buttons;