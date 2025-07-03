 import React, { useState } from "react";
import { useNavigate } from "react-router";
 import { useContext } from "react";
 import { Authcontext } from "@/context/authcontext";


 const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #aaa",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "8px",
  },
  link: {
    color: "#4caf50",
    cursor: "pointer",
    textDecoration: "underline",
  },
};


const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate()
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const {login}= useContext(Authcontext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
   
    login()


    if (Object.keys(formErrors).length === 0) {
      console.log("Login Data:", formData);
      alert("Login Successful ✅");
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={{ marginTop: "15px" }}>
          Don't have an account? <span onClick={()=> nav('/signup')}>Sign up</span>
        </p>
      </form>
    </div>
  );
};



export default Login;
