
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/tickets', data);
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Error submitting data');
    }
  };

  return (
      <div className="main-div">
        <h1>Ticketing System</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(errors).length > 0 && (
              <div className="error-message">Please fill all the fields correctly</div>
          )}
          <div>
            <label>Enter Total Number of Tickets</label>
            <input type="number" {...register('number1', {required: true, min: 0})} />
            {errors.number1 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Enter Ticket Release Rate</label>
            <input type="number" {...register('number2', {required: true, min: 0})} />
            {errors.number2 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Enter Ticket Retrieval Rate</label>
            <input type="number" {...register('number3', {required: true, min: 0})} />
            {errors.number3 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Maximum Capacity of Tickets</label>
            <input type="number" {...register('number4', {required: true, min: 0})} />
            {errors.number4 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Enter No. of Vendor Threads</label>
            <input type="number" {...register('number5', {required: true, min: 0})} />
            {errors.number5 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Enter No. of Customer Threads</label>
            <input type="number" {...register('number6', {required: true, min: 0})} />
            {errors.number6 && <span>This field is required and cannot be negative</span>}
          </div>
          <div>
            <label>Enter Ticket Price</label>
            <input type="number" {...register('number7', {required: true, min: 0})} />
            {errors.number3 && <span>This field is required and cannot be negative</span>}
          </div>
          <div className="button-wrapper">
            <button type="submit">Start</button>
            <button type="button">Stop</button>
          </div>
        </form>
      </div>
  );
}

export default App;