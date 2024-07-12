import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { UPDATE_USER, GET_USER } from '../utils/mutations';
import "./account.css"

function Account(props) {
  const { loading, data } = useQuery(GET_USER);
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '', 
    firstName: '', 
    lastName: '' 
  });
  const [editMode, setEditMode] = useState(false);
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (data) {
      const { user } = data;
      setFormState({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: ''
      });
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const  userResult  = await updateUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      setEditMode(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="account-container">
      <h1>Account Details</h1>

      {!editMode ? (
        <div className="account-details">
          <p><strong>Name:</strong> {formState.firstName} {formState.lastName}</p>
          <p><strong>Email:</strong> {formState.email}</p>
          <button onClick={() => setEditMode(true)} className ="editBtn">Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="edit-form">
          <div className="">
            <label htmlFor="firstName">First Name:</label>
            <input
              placeholder="First"
              name="firstName"
              type="text"
              id="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="lastName">Last Name:</label>
            <input
              placeholder="Last"
              name="lastName"
              type="text"
              id="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Account;

