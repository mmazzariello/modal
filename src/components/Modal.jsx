import React, { useRef } from "react";

const Modal = ({ children, title, root }) => {
  const ref = useRef(null);

  return (
    <div ref={ref}>
      <div>
        <div>
          <div>{title}</div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
