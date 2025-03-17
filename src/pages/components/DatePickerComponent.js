import React, { useState } from "react";

const DatePickerComponent = () => {
  // State to hold the selected date
  const [selectedDate, setSelectedDate] = useState("");

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Update the selected date
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {" "}
          {/* 50% width for medium and larger screens */}
          <div className="form-group">
            <label htmlFor="datePicker">Choose Date</label>
            <input
              type="date"
              className="form-control"
              id="datePicker"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;
