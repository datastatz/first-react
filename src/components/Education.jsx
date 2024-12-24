import React from 'react';

function Education({ educationEntries, addEducationEntry, updateEducationEntry }) {
  return (
    <div className="education-section">
      <div>
        <h2>Education</h2>
        {/* Loop through each education entry */}
        {educationEntries.map((entry, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <label>School Name:</label>
            <input
              type="text"
              value={entry.schoolName}
              onChange={(e) => updateEducationEntry(index, 'schoolName', e.target.value)}
            />
            <label>Title of Study:</label>
            <input
              type="text"
              value={entry.titleOfStudy}
              onChange={(e) => updateEducationEntry(index, 'titleOfStudy', e.target.value)}
            />
            <label>Date of Study:</label>
            <input
              type="text"
              value={entry.dateOfStudy}
              onChange={(e) => updateEducationEntry(index, 'dateOfStudy', e.target.value)}
            />
            <label>Level of Study:</label>
            <input
              type="text"
              value={entry.levelOfStudy}
              onChange={(e) => updateEducationEntry(index, 'levelOfStudy', e.target.value)}
            />
          </div>
        ))}
        {/* Button to add a new education entry */}
        <button onClick={addEducationEntry}>Add Education</button>
      </div>
    </div>
  );
}

export default Education;
