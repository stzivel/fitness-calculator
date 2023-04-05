import React from "react";

function Results({ calories }) {
  console.log(calories);

  const caloriegoals = calories?.data?.goals;

  const BMR = calories.data.BMR;
  const maintainWeightCalories = caloriegoals["maintain weight"];
  const mildWeightLoss = caloriegoals["Mild weight loss"].calory;
  const weightLoss = caloriegoals["Weight loss"].calory;
  const extremeWeightLoss = caloriegoals["Extreme weight loss"].calory;
  const mildWeightGain = caloriegoals["Mild weight gain"].calory;
  const weightGain = caloriegoals["Weight gain"].calory;
  const extremeWeightGain = caloriegoals["Extreme weight gain"].calory;

  return (
    <div className="table py-12 w-full overflow-x-auto ">
      <table className="border-2 border-green-600 text-sm text-center text-green-500 font-bold  table-auto max-w-3xl sm:max-w-full sm:mx-auto divide-y divide-green-600">
        <thead className="text-sm text-white uppercase bg-black ">
          <tr>
            <th scope="col" className="px-2  sm:px-6 py-3">
              BMR
            </th>

            <th scope="col" className="px-6  sm:px-2 py-3">
              Maintain Weight
            </th>

            <th scope="col" className="px-6  sm:px-2 py-3">
              Mild Weight Loss
            </th>

            <th scope="col" className="px-6  sm:px-2 py-3">
              Weight Loss
            </th>
            <th scope="col" className="px-6  sm:px-2 py-3">
              Extreme Weight Loss
            </th>

            <th scope="col" className="px-6  sm:px-2 py-3">
              Mild Weight Gain
            </th>

            <th scope="col" className="px-6  sm:px-2 py-3">
              Weight Gain
            </th>
            <th scope="col" className="px-6  sm:px-2 py-3">
              Extreme Weight Gain
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b bg-gray-800 border-green-700 ">
            <td className="px-6 sm:px-2 py-4">{Math.round(BMR)}</td>

            <td className="px-6 sm:px-2 py-4">
              {Math.round(maintainWeightCalories)}cal
            </td>

            <td className="px-6 sm:px-2 py-4">
              {Math.round(mildWeightLoss)}cal
            </td>

            <td className="px-6 sm:px-2 py-4">{Math.round(weightLoss)}cal</td>

            <td className="px-6 sm:px-2 py-4">
              {Math.round(extremeWeightLoss)}cal
            </td>

            <td className="px-6 sm:px-2 py-4">
              {Math.round(mildWeightGain)}cal
            </td>

            <td className="px-6 sm:px-2 py-4">{Math.round(weightGain)}cal</td>

            <td className="px-6 sm:px-2 py-4">
              {Math.round(extremeWeightGain)}cal
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Results;
