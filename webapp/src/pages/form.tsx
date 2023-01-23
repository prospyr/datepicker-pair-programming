import DatePicker from "@/components/date-picker";

export default function FormPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-2">
      <h1 className="text-lg font-bold">Order Form</h1>
      <form className="flex flex-col space-y-2">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <div className="mt-1">
            {/* Date cannot be in the future */}
            <DatePicker />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create order
          </button>
        </div>
      </form>
    </div>
  );
}
