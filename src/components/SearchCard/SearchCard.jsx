//npm modules
import { useState } from "react";

// css
import styles from "./SearchCard.module.css";

const SearchCard = (props) => {
  const [formData, setFormData] = useState({
    specialization: "",
    symptoms: "",
    location: "",
  });
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleDoctorSearch(formData);
  };

  return (
    <main>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.form}
        id="searchForm"
      >
        <input
          name="specialization"
          type="text"
          autoComplete="off"
          value={formData.specialization}
          onChange={handleChange}
          placeholder="🩺 Condition, doctor, symptoms"
        />
        
        <input
          name="location"
          type="text"
          autoComplete="off"
          value={formData.location}
          onChange={handleChange}
          placeholder=" 📍 City"
        />
        <div>
          <button className={styles.button}>Search</button>
        </div>
      </form>
    </main>
  );
};

export default SearchCard;
