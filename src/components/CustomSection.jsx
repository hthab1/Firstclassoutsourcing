import React from "react";

function CustomSection({ children, classNameParent, classNameChild }) {
  return (
    <section
      className={`w-screen overflow-x-hidden flex flex-col items-center justify-center px-6 ${classNameParent}`}
    >
      <div className={`max-w-screen-xl relative ${classNameChild}`}>{children}</div>
    </section>
  );
}

export default CustomSection;
