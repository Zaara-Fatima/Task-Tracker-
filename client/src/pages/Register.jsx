import React, { useState } from "react";
import taskApi from "../services/taskApi";
import { useNavigate } from "react-router-dom";

export const Register = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await taskApi.post("/auth/register", formData);
      onRegisterSuccess(data.user); // Pass user info back to parent
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f1117] text-white flex items-center justify-center">
      <div className="w-full max-w-md bg-[#1a1c23] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        {error && (
          <p className="bg-red-600 text-white p-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#2a2d36] text-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#2a2d36] text-white focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#2a2d36] text-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p>Already have an account?  
          <button onClick={()=>navigate('/login')}> Login</button>
        </p>
      </div>
    </main>
  );
};
