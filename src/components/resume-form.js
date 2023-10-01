"use client";
import "../app/globals.css";

const Resume = () => {
  return (
    <div className="bg-slate-100 flex justify-center item-center h-screen">
      <form className="bg-white rounded-lg px-3 py-2 w-2/3 my-3 ">
        <p>Fill up below form</p>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>First Name</label>
          <input type="email" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="email" />
        </div>
        <div>
          <label>About Me</label>
          <textarea type="email" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="email" />
        </div>
        <div>
          <label>Website</label>
          <input type="email" />
        </div>
        <div>
          <label>Address</label>
          <input type="email" />
        </div>
        <button>Preview Resume</button>
      </form>
    </div>
  );
};

export default Resume;
