import React from 'react';

const CreateForm = (props) => (
  <main className="p-4">
    <div className="flex justify-center items-center h-screen">
      <form className="bg-green-500 p-2 rounded-lg w-2/3" onSubmit={props.handeler}>
        <h2 className="text-xl font-semibold text-center text-black mb-4">Create Cookie Stand</h2>

        <div className="mb-5">
          <FormInput label="Location:" placeholder="Enter location" name="location" />
        </div>

        <div className="flex items-center space-x-2">
          <FormInput
            label="Minimum Customers per Hour:"
            placeholder="Enter minimum customers"
            name="minCustomersPerHour"
          />

          <FormInput
            label="Maximum Customers per Hour:"
            placeholder="Enter maximum customers"
            name="maxCustomersPerHour"
          />

          <FormInput
            label="Average Cookies per Sale:"
            placeholder="Enter average cookies"
            name="avgCookiesPerSale"
            step="0.01"
          />

          <button
            type="submit"
            className="bg-green-500 text-white w-48 h-24 px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    <div className="p-2 bg-gray-100">
      {/* Add placeholder component here */}
    </div>
  </main>
);

const FormInput = ({ label, placeholder, name, step }) => (
  <label className="block mb-2">
    {label}
    <input
      type={step ? "number" : "text"}
      step={step}
      className="w-full border rounded-md p-2"
      placeholder={placeholder}
      name={name}
    />
  </label>
);

export default CreateForm;
