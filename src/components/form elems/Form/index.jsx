import React from "react";

const Form = ({ legendText, onSubmit, children }) => {
  return (
    <form>
      <fieldset>
        <legend>{legendText}</legend>
        {children}
      </fieldset>
    </form>
  );
};

export default Form;
