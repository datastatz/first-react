import React from 'react';

function GeneralInfo(props) {
  const {
    fullName, setFullName,
    email, setEmail,
    phone, setPhone,
    address, setAddress
  } = props;

  return (
    <div className="general-info">
      <div>
        <h2>General Information</h2>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
}

export default GeneralInfo;
