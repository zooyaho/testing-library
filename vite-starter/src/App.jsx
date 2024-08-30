import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);
  const nextColor = btnColor === 'red' ? 'blue' : 'red';
  const className = btnIsDisabled ? 'gray' : btnColor;

  return (
    <div>
      <button
        className={className}
        onClick={() => setBtnColor(nextColor)}
        disabled={btnIsDisabled}
      >
        Change to {nextColor}
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
