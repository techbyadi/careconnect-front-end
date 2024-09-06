//npm modules
import { useState } from "react";

// components

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
    <main className={styles.container}>
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
          placeholder="e.g. Cardiologist"
        />
        <input
          name="symptoms"
          type="text"
          autoComplete="off"
          value={formData.symptoms}
          onChange={handleChange}
          placeholder="e.g. chest pain"
        />
        <input
          name="location"
          type="text"
          autoComplete="off"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Boston "
        />
        <div>
          <button className={styles.button}>Search</button>
        </div>
      </form>
    </main>
  );
};

export default SearchCard;
