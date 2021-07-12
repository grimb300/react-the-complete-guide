import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstValue,
    isValid: firstIsValid,
    hasError: firstHasError,
    valueChangedHandler: firstChangedHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useInput((value) => value.trim().length > 0);
  const {
    value: lastValue,
    isValid: lastIsValid,
    hasError: lastHasError,
    valueChangedHandler: lastChangedHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useInput((value) => value.trim().length > 0);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const firstClasses = !firstHasError ? "form-control" : "form-control invalid";
  const lastClasses = !lastHasError ? "form-control" : "form-control invalid";
  const emailClasses = !emailHasError ? "form-control" : "form-control invalid";

  const formIsValid = firstIsValid && lastIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstHasError || lastHasError || emailHasError) {
      return;
    }

    firstReset();
    lastReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="first">First Name</label>
          <input
            type="text"
            id="first"
            onChange={firstChangedHandler}
            onBlur={firstBlurHandler}
            value={firstValue}
          />
          {firstHasError && (
            <p className="error-text">First Name must not be empty.</p>
          )}
        </div>
        <div className={lastClasses}>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            onChange={lastChangedHandler}
            onBlur={lastBlurHandler}
            value={lastValue}
          />
          {lastHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Email is invalid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
