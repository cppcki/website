//copied from about
function eventForm() {
  return (
    <div>
      <h1>Add an Event</h1>
      <p>Title</p>
      <input type="text" placeholder="Title here"></input>

      <p>Location</p>
      <input type="text" placeholder="Location here"></input>

      <p>Thumbnail</p>
      <input type="text" placeholder="Thumbnail here"></input>

      <p>Description</p>
      <input type="text" placeholder="Description here"></input>

      <p>Date</p>
      <input type="date"></input>

      <p>Start Time</p>
      <input type="time" placeholder="Date here"></input>

      <p>End Time</p>
      <input type="time" placeholder="Date here"></input>

      <p>Recurring?</p>
      <input type="checkbox"></input>
      
      <p>Points</p>
      <input type="number"></input>

      <button>Create Event</button>
    </div>
    
  );
}

export default eventForm;