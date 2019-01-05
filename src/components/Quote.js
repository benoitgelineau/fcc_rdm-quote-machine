import React from 'react';

const Quote = props =>
  (
    <div id="text" className="text-center">
      <p><span className="quote-sign">&quot;</span> {props.text} <span className="quote-sign">&quot;</span></p>
    </div>
  );

export default Quote;