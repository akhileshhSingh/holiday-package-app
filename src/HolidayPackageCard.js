import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTH_TOKEN } from './Auth'; 
import './HolidayPackageCard.css'; 

const HolidayPackageCard = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API call
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://172.105.55.211/api/packageApi.php?type=getHolidayPackage',
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`, 
            },
          }
        );
        if (response.data && response.data.isSuccess && response.data.data.length > 0) {
          setPackages(response.data.data); 
        } else {
          setError('No packages found.');
        }
      } catch (error) {
        console.error('Error fetching the packages:', error);
        setError('Failed to fetch packages.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="packages-container">
      {/* <h2 className="packages-title">Holiday Packages</h2> */}
      {error ? (
        <p>{error}</p>
      ) : packages.length > 0 ? (
        <div className="cards-grid">
          {packages.map((pkg) => (
            <div className="card" key={pkg.id}>
              <h3 className="card-title">{pkg.title}</h3>
              <p className="card-destination">Destination: {pkg.destination}</p>
              <p className="card-days">Number of Days: {pkg.no_of_days}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HolidayPackageCard;
