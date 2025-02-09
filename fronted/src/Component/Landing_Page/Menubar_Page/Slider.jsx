import React, { useState } from 'react';
import '../Menubar_Page/Slider.css';
import img2 from '../Menubar_Page/wedding.jpg';  // Example of an image import
import { Carousel } from 'antd';
import Story from '../SuceesStory/Story'
const contentStyle = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedFromAge, setSelectedFromAge] = useState('');
  const [selectedToAge, setSelectedToAge] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleGenderChange = (e) => setSelectedGender(e.target.value);
  const handleFromAgeChange = (e) => setSelectedFromAge(e.target.value);
  const handleToAgeChange = (e) => setSelectedToAge(e.target.value);
  const handleReligionChange = (e) => setSelectedReligion(e.target.value);
  const handleSearchTermChange = (e) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    console.log(`Searching for: Gender: ${selectedGender}, Age Range: ${selectedFromAge} - ${selectedToAge}, Religion: ${selectedReligion}, Term: ${searchTerm}`);
  };

  const ageOptions = [];
  for (let i = 18; i <= 60; i++) {
    ageOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <>
      
      {/* <Carousel arrows infinite={false}>
        <div>
        <img src={img2} alt="Logo" style={{height:"200px",width:"500px"}} />
        </div>
        <div>
        <img src={img2} alt="Logo" />
        </div>
        <div> 
        <img src={img2} alt="Logo" />

                 </div>
        
      </Carousel> */}
      <br />

    

      {/* Search Section */}
      <div className="search-container">
        <select className="search-dropdown" value={selectedGender} onChange={handleGenderChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select className="search-dropdown" value={selectedFromAge} onChange={handleFromAgeChange}>
          <option value="">From Age</option>
          {ageOptions}
        </select>

        <label>To</label>

        <select className="search-dropdown" value={selectedToAge} onChange={handleToAgeChange}>
          <option value="">To Age</option>
          {ageOptions}
        </select>

        <select className="search-dropdown" value={selectedReligion} onChange={handleReligionChange}>
          <option value="">Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="sikh">Sikh</option>
          <option value="jain">Jain</option>
        </select>

        <input
          type="text"
          className="search-input"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>  <br /><br /><br />
      <Story/>
    </>
  );
}

export default Slider;
