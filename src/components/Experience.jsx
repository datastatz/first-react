import React from 'react';

function Experience(props) {
  const {
    companyName, setCompanyName,
    positionTitle, setPositionTitle,
    mainResponsibilities, setMainResponsibilities,
    dateFrom, setDateFrom,
    dateUntil, setDateUntil
  } = props;

  return (
    <div className="experience">
      <div>
        <h2>Experience</h2>
        <label>Company Name:</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Position Title:</label>
        <input
          type="text"
          value={positionTitle}
          onChange={(e) => setPositionTitle(e.target.value)}
        />
        <label>Main Responsibilities:</label>
        <input
          type="text"
          value={mainResponsibilities}
          onChange={(e) => setMainResponsibilities(e.target.value)}
        />
        <label>Date From:</label>
        <input
          type="text"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <label>Date Until:</label>
        <input
          type="text"
          value={dateUntil}
          onChange={(e) => setDateUntil(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Experience;
