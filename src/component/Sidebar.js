import React from "react";
import "../style/Sidebar.css";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <section className="sidebar-container">
        <h4>Gender</h4>
        <input type="checkbox" id="male" name="gender" />
        <label htmlFor="male">male</label>
        <span className="checkmark" />
        <input type="checkbox" id="female" name="gender" />
        <label htmlFor="female">female</label>
      </section>
      <section className="sidebar-container">
        <h4>Species</h4>
        <input type="checkbox" id="diamond" name="species" />
        <label htmlFor="diamond">diamond</label>
        <span className="checkmark" />
        <input type="checkbox" id="jade" name="species" />
        <label htmlFor="jade">jade</label>
        <span className="checkmark" />
        <input type="checkbox" id="gem" name="species" />
        <label htmlFor="gem">gem</label>
        <span className="checkmark" />
      </section>
      <section>
        <h4>Base</h4>
        <input type="checkbox" id="gold" name="base" />
        <label htmlFor="gold">gold</label>
        <span className="checkmark" />
        <input type="checkbox" id="platinum" name="base" />
        <label htmlFor="platinum">platinum</label>
        <span className="checkmark" />
      </section>
    </div>
  );
};

export default Sidebar;
