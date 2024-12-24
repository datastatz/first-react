import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  // GeneralInfo state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // Education state and functions
  const [educationEntries, setEducationEntries] = useState([]);

  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      { schoolName: '', titleOfStudy: '', dateOfStudy: '', levelOfStudy: '' },
    ]);
  };

  const updateEducationEntry = (index, field, value) => {
    const updatedEntries = educationEntries.map((entry, i) => {
      if (i === index) {
        return { ...entry, [field]: value }; // Update the specific field
      }
      return entry;
    });
    setEducationEntries(updatedEntries);
  };

  const removeEducationEntry = (index) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
  };

  // Experience state and functions
  const [experienceEntries, setExperienceEntries] = useState([]);

  const addExperienceEntry = () => {
    setExperienceEntries([
      ...experienceEntries,
      { companyName: '', positionTitle: '', mainResponsibilities: '', dateFrom: '', dateUntil: '' },
    ]);
  };

  const updateExperienceEntry = (index, field, value) => {
    const updatedEntries = experienceEntries.map((entry, i) => {
      if (i === index) {
        return { ...entry, [field]: value }; // Update the specific field
      }
      return entry;
    });
    setExperienceEntries(updatedEntries);
  };

  const removeExperienceEntry = (index) => {
    const updatedEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(updatedEntries);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <GeneralInfo
          fullName={fullName} setFullName={setFullName}
          email={email} setEmail={setEmail}
          phone={phone} setPhone={setPhone}
          address={address} setAddress={setAddress}
        />

        <Education
          educationEntries={educationEntries}
          addEducationEntry={addEducationEntry}
          updateEducationEntry={updateEducationEntry}
          removeEducationEntry={removeEducationEntry}
        />

        <Experience
          experienceEntries={experienceEntries}
          addExperienceEntry={addExperienceEntry}
          updateExperienceEntry={updateExperienceEntry}
          removeExperienceEntry={removeExperienceEntry}
        />
      </div>

      <div className="preview-container">
        <div className="preview">
          <h2>Preview</h2>
          <p><strong>Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Address:</strong> {address}</p>

          <h3>Education</h3>
          {educationEntries.map((entry, index) => (
            <div key={index}>
              <p><strong>School Name:</strong> {entry.schoolName}</p>
              <p><strong>Title of Study:</strong> {entry.titleOfStudy}</p>
              <p><strong>Date of Study:</strong> {entry.dateOfStudy}</p>
              <p><strong>Level of Study:</strong> {entry.levelOfStudy}</p>
            </div>
          ))}

          <h3>Experience</h3>
          {experienceEntries.map((entry, index) => (
            <div key={index}>
              <p><strong>Company Name:</strong> {entry.companyName}</p>
              <p><strong>Position Title:</strong> {entry.positionTitle}</p>
              <p><strong>Main Responsibilities:</strong> {entry.mainResponsibilities}</p>
              <p><strong>Date From:</strong> {entry.dateFrom}</p>
              <p><strong>Date Until:</strong> {entry.dateUntil}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
