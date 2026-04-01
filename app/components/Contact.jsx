"use client";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    alert("Message sent!");
    form.reset();
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="mb-10 space-y-2 text-gray-700">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:piusiwu1@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              piusiwu1@gmail.com
            </a>
          </p>

          <p>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/2348169366508"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              08169366508
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/ikennaiwu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              github.com/ikennaiwu
            </a>
          </p>

<p>
  ✍️ Medium:{" "}
  <a
    href="https://medium.com/@piusiwu1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 font-medium hover:underline"
  >
    medium.com/@piusiwu1
  </a>
</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto space-y-5"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg 
                       hover:bg-blue-700 transition duration-300 shadow-md 
                       hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}