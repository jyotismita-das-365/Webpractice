const Contact = () => {
  return (
    <>
      <div className="bg-slate-900 text-white m-10">
        <h1>CONTACT US FOR ANY QUERY</h1>
        <form action="POST" className="flex flex-col justify-center items-center gap-5">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your Name"/>

          <label htmlFor="phone">Phone No</label>
          <input type="phone" placeholder="Enter Your Phone Number"/>

          <label htmlFor="description">Your Query</label>
          <textarea name="description"></textarea>
        </form>
      </div>
    </>
  );
};

export default Contact;
