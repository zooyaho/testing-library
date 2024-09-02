import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SummaryForm() {
  const [termsChecked, setTermsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          label={checkboxLabel}
          checked={termsChecked}
          onChange={(e) => setTermsChecked(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsChecked}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
