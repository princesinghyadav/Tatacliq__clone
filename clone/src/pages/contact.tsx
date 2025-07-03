 import React, { useState } from "react";
// import "./ContactForm.css";

interface ContactData {
  name: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState<ContactData[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {submitted.length > 0 && (
        <div className="submitted-list">
          <h3>Submitted Contacts</h3>
          <ul>
            {submitted.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.email}, {item.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
