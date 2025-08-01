const Contact = () => (
  <section className="bg-gray-100 py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input className="w-full p-3 border rounded" type="text" placeholder="Your Name" />
        <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" />
        <textarea className="w-full p-3 border rounded" rows="4" placeholder="Message" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
