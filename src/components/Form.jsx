import React, { useState } from "react";
import { fetchFromAPI } from "../fetchFromAPI";
import Results from "./Results";


function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
const [calories, setCalories] = useState('');
  
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchFromAPI(age, gender, height, weight, activity);
      setCalories(response);
      console.log(calories)
      
      

      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="form bg-white px-8 py-16">
      <form
        className="bg-black shadow-md rounded px-8 pt-6 sm:w-[500px] h-[480px] mx-auto border-4  border-green-600"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-3xl text-center mb-4">
          <span className="text-green-600">MyFitness</span>Calculator
        </h1>
        <div className="mb-4 ">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            required
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4 ">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            id="age"
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <select
            className="appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            value={gender}
            onChange={handleGenderChange}
          >
             <option value="" disabled selected hidden>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4 ">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            id="height"
            type="number"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <input
            className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            id="weight"
            type="number"
            placeholder="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="mb-4 ">
          <select
            className="appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:outline-green-600"
            value={activity}
            onChange={handleActivityChange}
          >
            <option value="" disabled selected hidden>
              Activity level
            </option>
            <option value="level_1">Little or no exercise</option>
            <option value="level_2">Exercise 1-3 times/week</option>
            <option value="level_3">Exercise 4-5 times/week</option>
            <option value="level_4">
              Daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="level_5">Intense exercise 6-7 times/week</option>
            <option value="level_6">
              Very intense exercise daily, or physical job
            </option>
          </select>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-600 rounded px-6 py-1 text-white text-xl hover:bg-black hover:border hover:border-green-600"
          >
            Submit
          </button>
        </div>

       
      </form>

      {console.log(calories)}

      {calories && calories !== '' && <Results calories={calories} />}

      
    </div>
  );
}

export default Form;
