import React, { useState } from 'react';
import { Edit } from '@material-ui/icons';
import './tutor.css';

const tutors = [
  {
    id: 1,
    name: "Jubaer Ahmad",
    facebook: "fb/jubaerahmad.info",
    avater: "//eop.pabnainfo.com/images/1.jpg"
  },
  {
    id: 2,
    name: "Sofiqul Islam",
    facebook: "fb/SChoolWab",
    avater: "//eop.pabnainfo.com/images/2.jpg"
  },
  {
    id: 3,
    name: "Nirob hasan",
    facebook: "fb/nirobbd21",
    avater: "//eop.pabnainfo.com/images/9.jpg"
  },
  {
    id: 4,
    name: "Swapon Hossain",
    facebook: "fb/swapon109",
    avater: "//eop.pabnainfo.com/images/4.jpg"
  }
];

const Tutor = () => {
  const [state, setState] = useState({
    select: 1,
    tutor: 1,
    isOpen: false
  });
  const changeTutor = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      isOpen: false
    });
  };

  const selectTutor = tutors.find(
    tutor => Number(tutor.id) === Number(state.tutor)
  );

  return (
    <div>
      <div className="tutor-title d-flex">
        INSTRUCTOR
        <span
          className="edit-icon ml-auto"
          onClick={() =>
            setState({
              ...state,
              isOpen: !state.isOpen
            })
          }
        >
          <Edit className="text-light" />
        </span>
      </div>
      {state.isOpen && (
        <div className="select-tutor">
          <select
            className="custom-select custom-select-sm"
            name="tutor"
            value={state.tutor}
            onChange={changeTutor}
            onBlur={() =>
              setState({
                ...state,
                isOpen: false
              })
            }
          >
            {tutors.map(tutor => (
              <option key={tutor.id} value={tutor.id}>
                {tutor.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="avater">
        <img src={selectTutor.avater} alt={selectTutor.name} />
      </div>
      <p className="tutor-name">{selectTutor.name}</p>
      <p className="tutor-fb">{selectTutor.facebook}</p>
    </div>
  );
};
export default Tutor;