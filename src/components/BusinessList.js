import React, { useState, useEffect } from "react";
import axios from "axios";

function BusinessList() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/businesses")
      .then((response) => setBusinesses(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Registered Businesses</h2>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            <strong>{business.name}</strong> - {business.business_type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessList;
