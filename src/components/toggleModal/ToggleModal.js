import React from 'react';
import sprite from "../../images/sprite.svg";

const ToggleModal = ({toggleModal }) => {
    return (
        <svg
        className="icon"
        width="10"
        height="5"
        fill="#C0C0C0"
        onClick={toggleModal}
      >
        <use href={sprite + '#icon-arrow'}></use>
      </svg>
    );
}

export default ToggleModal;