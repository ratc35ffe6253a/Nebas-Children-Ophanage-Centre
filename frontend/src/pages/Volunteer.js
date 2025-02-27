import { useState } from "react";
import { addVolunteer } from "../api";

function Volunteer() {
  const [formData, setFormData] = useState({ name: "", email: "", skills: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVolunteer(formData.name, formData.email, formData.skills);
    setFormData({ name: "", email: "", skills: "" });
    alert("Application submitted!");
  };

  return (
    <div className="volunteer">
      <h1>Become a Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <textarea placeholder="Skills & Experience" value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })} required />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Volunteer;
