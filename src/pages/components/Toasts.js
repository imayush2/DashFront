import React, { useState, useEffect } from "react";
import axios from "axios";

const ClinicalTrialsTable = () => {
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    const fetchTrials = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/trial/clinical-trials"
        );
        setTrials(response.data);
      } catch (error) {
        console.error("Error fetching clinical trials data:", error);
      }
    };

    fetchTrials();
  }, []);

  return (
    <div>
      <h1>Clinical Trials Data</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Disease Title Searched</th>
            <th>Data Export Date</th>
            <th>Trial ID</th>
            <th>Affiliation</th>
            <th>Full Name</th>
            <th>Contact Email</th>
            <th>Contact Tel</th>
            <th>Contact Address</th>
            <th>Countries</th>
            <th>Primary Sponsor</th>
            <th>Public Title</th>
            <th>Last Refreshed On</th>
            <th>Web Address</th>
            <th>Recruitment Status</th>
            <th>PubMed Total Results</th>
            <th>Social Media Links</th>
            <th>Google Search Key</th>
          </tr>
        </thead>
        <tbody>
          {trials.map((trial) => (
            <tr key={trial.id}>
              <td>{trial.id}</td>
              <td>{trial.Source}</td>
              <td>{trial["Disease Title Searched"]}</td>
              <td>{trial["Data Export Date"]}</td>
              <td>{trial["Trial ID"]}</td>
              <td>{trial.Affiliation}</td>
              <td>{trial["Full Name"]}</td>
              <td>{trial["Contact Email"]}</td>
              <td>{trial["Contact Tel"]}</td>
              <td>{trial["Contact Address"]}</td>
              <td>{trial.Countries}</td>
              <td>{trial["Primary Sponsor"]}</td>
              <td>{trial["Public Title"]}</td>
              <td>{trial["Last Refreshed On"]}</td>
              <td>{trial["Web Address"]}</td>
              <td>{trial["Recruitment Status"]}</td>
              <td>{trial["PubMed Total Results"]}</td>
              <td>{trial["Social Media Links"]}</td>
              <td>{trial["Google Search Key"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClinicalTrialsTable;
