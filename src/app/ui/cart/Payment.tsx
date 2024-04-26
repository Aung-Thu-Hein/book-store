export const Payment = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <form>
        <div className="mb-3">
          <label htmlFor="card" className="block font-medium mb-1">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            placeholder="Enter Card Number"
            className="apperance-none border shadow rounded p-1 w-full text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="block font-medium mb-1">
            Name on the Card
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name on Card"
            className="apperance-none border shadow rounded p-1 w-full text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiry" className="block font-medium mb-1">
            Card Expiry
          </label>
          <input
            type="date"
            id="expiry"
            className="apperance-none border shadow rounded p-1 w-full text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="block font-medium mb-1">
            CVV/PIN
          </label>
          <input
            type="password"
            id="cvv"
            placeholder="Enter CVV or PIN"
            className="apperance-none border shadow rounded p-1 w-full text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-around gap-2 mt-5">
          <button className="w-1/2 flex-grow bg-yellow-200 p-2 rounded-md">
            Cancel
          </button>
          <button className="w-1/2 flex-grow bg-yellow-600 p-2 rounded-md">
            Payment
          </button>
        </div>
      </form>
    </div>
  );
};
