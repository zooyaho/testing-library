import { useState } from 'react';
import { kebabCaseToTitleCase } from './helpers';

function App() {
  const [btnColor, setBtnColor] = useState('medium-violet-red');
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  // const nextColor = btnColor === 'red' ? 'blue' : 'red';
  const nextColorClass =
    btnColor === 'medium-violet-red' ? 'midnight-blue' : 'medium-violet-red';
  const className = btnIsDisabled ? 'gray' : btnColor;
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);

  return (
    <div>
      <button
        className={className}
        onClick={() => setBtnColor(nextColorClass)}
        disabled={btnIsDisabled}
      >
        Change to {nextColorTitleCase}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => {
          setBtnIsDisabled(e.target.checked);
        }}
      />
      <label htmlFor="disable-button-checkbox">disable button</label>
    </div>
  );
}

export default App;
