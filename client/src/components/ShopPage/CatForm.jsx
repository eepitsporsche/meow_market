// import React, { useState } from 'react';

// const CatForm = ({ setCatDetails }) => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [breed, setBreed] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && age && breed) {
//       setCatDetails({ name, age, breed });
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Cat's Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
//       </div>
//       <div>
//         <label>Breed:</label>
//         <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} required />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CatForm;
