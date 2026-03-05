const Contact = () => {
  return (
    <>
      <div className="bg-slate-200 text-black p-14 w-full">
        <h1 className="text-center pb-10 text-4xl font-semibold">
          CONTACT US FOR ANY QUERY
        </h1>
        <form
          action="POST"
          className="flex flex-col justify-center gap-2"
        >
          <div className="flex items-center text-xl w-full gap-4">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter Your Name" className="flex-1 h-10"/>
          </div>

          <div className="flex items-center text-xl w-full gap-4">
            <label htmlFor="phone">Phone No</label>
            <input type="phone" placeholder="Enter Your Phone Number" className="flex-1 h-10"/>
          </div>

          <div className="flex items-center text-xl w-full gap-4">
            <label htmlFor="description">Your Query</label>
            <textarea name="description" className="flex-1 h-10"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
