import React from "react";

function CustomSection({ children, classNameParent, classNameChild }) {
  return (
    <section
      className={`w-screen flex flex-col h-100vh items-center justify-center ${classNameParent}`}
    >
      <div className={`max-w-screen-xl relative ${classNameChild}`}>{children}</div>
    </section>
  );
}

export default CustomSection;
