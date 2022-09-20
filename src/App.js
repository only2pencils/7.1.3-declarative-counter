// useState is a named import, so we import it this way:
// import React from 'react'
// import { useState } from 'react'

// one line import:
import React, { useState } from "react";

// create a new line and invoke the useState function:
// interpolate the counter into an h1 tag
// invoke changeCounter, so we can watch declarative rendering at work
// Open the developer tools console in your browser and type the following:
// changeCounter(2)
// Render the counter in multiple places, perhaps in an h1 tag and an h4 tag:
function App() {
  let [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{counter}</h1>;<h4>{counter}</h4>
    </div>
  );
}

export default App;

// The useState function has returned two variables: counter and changeCounter
// The counter variable is equal to 1, because that is what we passed into useState
// The changeCounter function can be used to change the counter variable.
// We will get a better idea of what it does in a moment.
