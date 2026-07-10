const InteractionForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-8">

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="font-medium">Doctor Name</label>

          <input
            type="text"
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="Enter doctor name"
          />
        </div>

        <div>
          <label className="font-medium">Hospital</label>

          <input
            type="text"
            className="w-full border rounded-lg p-3 mt-2"
            placeholder="Hospital name"
          />
        </div>

        <div>
          <label className="font-medium">Interaction Type</label>

          <select className="w-full border rounded-lg p-3 mt-2">
            <option>Meeting</option>
            <option>Call</option>
            <option>Email</option>
            <option>Conference</option>
          </select>
        </div>

        <div>
          <label className="font-medium">Follow-up Date</label>

          <input
            type="date"
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="font-medium">
          Discussion
        </label>

        <textarea
          rows="5"
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter discussion details..."
        />

      </div>

      <div className="mt-6">

        <label className="font-medium">
          Notes
        </label>

        <textarea
          rows="3"
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Additional notes..."
        />

      </div>

      <button
        className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-800"
      >
        Save Interaction
      </button>

    </div>
  );
};

export default InteractionForm;