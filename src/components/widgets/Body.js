import React, { useState, Fragment } from 'react';

import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import './body.css';

const Body = () => {
  const initStorage = localStorage.courseBody
    ? JSON.parse(localStorage.getItem("courseBody"))
    : "Your Content is Goes Here...";
  
  const [state, setState] = useState({
    body: initStorage,
    editBody: false
  });

  const changeHandler = (e, editor) => {
    const data = editor.getData();
    setState({
      ...state,
      body: data
    });
    localStorage.setItem('courseBody', JSON.stringify(data));
  };


  return (
    <Fragment>
      <CKEditor
        editor={InlineEditor}
        config={{ toolbar: ["heading", "bold", "italic"] }}
        data={state.body}
        onChange={changeHandler}
        // onBlur={blurHandler}
      />
    </Fragment>
  );
  
}
export default Body;