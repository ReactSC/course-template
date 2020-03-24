import React, { useState, Fragment } from 'react';

import './header.css';

const Header = () => {

  const initState = localStorage.courseHeader
    ? JSON.parse(localStorage.getItem("courseHeader"))
    : {
        title: "Basic Website Design",
        subject: "HTML (Table, Lists)",
        number: "01"
      };

  const [state, setState] = useState({
    title: initState.title,
    subject: initState.subject,
    number: initState.number,
  });

  const [edit, setEdit] = useState({
    title: false,
    subject: false,
    number: false
  })

  const changeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  
  const blurHandler = e => {
    setEdit({
      ...edit,
      [e.target.name]: false
    })
    localStorage.setItem("courseHeader", JSON.stringify(state));
  }
  
  const submitHandler = e => {
    e.key === "Enter" &&
    setEdit({
      ...edit,
      [e.target.name]: false
    });
    localStorage.setItem("courseHeader", JSON.stringify(state));
  }

  return (
    <Fragment>
      <div className="left">
        <h1 onClick={() => setEdit({ title: true })}>
          {!edit.title ? (
            state.title
          ) : (
            <input
              className="title"
              name="title"
              value={state.title}
              onChange={changeHandler}
              onBlur={blurHandler}
              onKeyUp={submitHandler}
            />
          )}
        </h1>
        <p>
          <span className="subfixed">Subject:</span>
          <span onClick={() => setEdit({ subject: true })}>
            {!edit.subject ? (
              state.subject
            ) : (
              <input
                className="subject"
                name="subject"
                value={state.subject}
                onChange={changeHandler}
                onBlur={blurHandler}
                onKeyUp={submitHandler}
              />
            )}
          </span>
        </p>
      </div>
      <div className="right">
        <p>
          <span className="number-prefix">Class: </span>
          <span className="number" onClick={() => setEdit({ number: true })}>
            {!edit.number ? (
              state.number
            ) : (
              <input
                className="number"
                name="number"
                value={state.number}
                onChange={changeHandler}
                onBlur={blurHandler}
                onKeyUp={submitHandler}
              />
            )}
          </span>
        </p>
      </div>
    </Fragment>
  );
};
export default Header;