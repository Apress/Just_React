import "./App.css";
function EnrolmentForm() {
  return (
    <div>
    <form className="enrolForm">
      <h1>Student Details</h1>
      <label>First name:</label>        
      <input type="text" name="fname" />
      <br />
      <label>Last name:</label>      
      <input type="text" name="lname"  />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
  );
}

export default EnrolmentForm;