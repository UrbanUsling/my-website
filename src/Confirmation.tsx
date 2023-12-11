import React from 'react';

interface ConfirmationProps {
  person: {
    full_name: string;
    email: string;
  };
  error?: string;
}

const Confirmation: React.FC<ConfirmationProps> = ({ person, error }) => {
  return (
    <div>
      <h1>Confirmation Page</h1>
      {error ? <p>Error: {error}</p> : null}
      <div id="root">
        <p>
          {person.full_name}, your registration with the email {person.email} was successful!
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
