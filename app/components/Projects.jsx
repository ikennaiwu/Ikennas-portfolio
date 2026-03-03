import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Project
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A real-world full-stack application currently in development
          </p>
        </div>

        {/* Project Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              IkayStorez – MERN E-Commerce Platform
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              A complete full-stack e-commerce platform built with MongoDB,
              Express, React and Node.js. Includes authentication,
              product management, cart system, payment integration,
              and admin dashboard.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                MongoDB
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                Express
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                Node.js
              </span>
            </div>

            <a
              href="https://github.com/ikennaiwu/IkayStorez-MERN-Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl 
                         hover:opacity-80 transition duration-300"
            >
              View on GitHub →
            </a>
          </div>

          {/* Right - Project Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500">
            <Image
              src="/istockphoto-1216415029-612x612.jpg"
              alt="IkayStorez Project Preview"
              width={800}
              height={500}
              className="w-full h-auto hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}