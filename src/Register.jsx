import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    details: '',
    domain: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/register',formData,{
        headers:{'Content-Type': 'multipart/form-data',}
      });
      console.log('App Registered Successfully')
      if (response.status === 200) {
        alert('App registered successfully!');
        setFormData({ name: '', logo: '', details: '', domain: '' });
        onRegister();
      }
    } catch (error) {
      alert('Error occurred while registering')
      console.error('Error registering app:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}class="form-container" >
    <h2>Register App</h2>
    <table>
    <tbody>
      <tr>
        <td><label for="name">App Name</label></td>
        <td><input type="text" id="name" name="name" required onChange={handleChange}/></td>
      </tr>
      <tr>
        <td><label for="logo">Logo</label></td>
        <td><input type="file" id="logo" name="logo" required onChange={handleChange}/></td>
      </tr>
      <tr>
        <td><label for="details">Details</label></td>
        <td><input type="text" id="details" name="details" required onChange={handleChange}/></td>
      </tr>
      <tr>
        <td><label for="url">URL</label></td>
        <td><input type="url" id="url" name="url" required onChange={handleChange}/></td>
      </tr>
      <tr>
        <td colSpan={2}>
        <button type='submit'>Register</button>
        </td>
      </tr>
      </tbody>
    </table>
  </form>

  );
};

export default Register;
