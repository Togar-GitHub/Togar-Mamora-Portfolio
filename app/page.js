import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[1500px] bg-gradient-to-b from-purple-200 to-purple-100 min-h-screen p-2 font-[Parkinsans]">
      <div className="w-full flex justify-center">
        <h1 className="text-5xl font-bold mt-10 text-blue-900">Togar Mamora Portfolio</h1>
      </div>

      {/* Personal Information Section */}
      <div className="text-blue-700 mt-8 ml-6">
        <h2 className="text-4xl font-semibold mb-4">Personal Information</h2>
        <h3 className="text-2xl font-bold mb-2">Email: 
          <a href="mailto:togar.mamora@gmail.com" className="text-blue-500 font-bold underline ml-2">togar.mamora@gmail.com</a>
        </h3>
        <h3 className="text-2xl font-bold mb-2">Resume: 
          <a 
            href="https://docs.google.com/document/d/1fQmB_VQ7lmRq73JOatSZsEH_-AVqdUBf/edit?usp=sharing&ouid=109914845379523616582&rtpof=true&sd=true" 
            className="text-white bg-blue-500 font-semibold text-base py-1 px-3 rounded-lg ml-2 hover:bg-blue-300 transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          {/* <iframe
          src="/awrightresume.pdf"
          className="w-full h-96 mb-4"
          title="Resume"
        ></iframe>
        <a href="/aw */}
        </h3>
        <h3 className="text-2xl font-bold mb-2">LinkedIn: 
          <a href="https://www.linkedin.com/in/togar-mamora-550358b7/" 
          className="text-white bg-blue-500 font-semibold text-base py-1 px-3 rounded-lg ml-2 hover:bg-blue-300 transition-all"
          target="_blank" 
          rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </h3>
        <h3 className="text-2xl font-bold mb-2">GitHub: 
          <a href="https://github.com/Togar-GitHub" 
          className="text-white bg-blue-500 font-semibold text-base py-1 px-3 rounded-lg ml-2 hover:bg-blue-300 transition-all" 
          target="_blank" 
          rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </h3>
      </div>

      <div className="flex pr-8">
        <div className="w-[450px] flex mr-8">
          {/* Objective Section in a new container with a different background */}
          <div className="mt-8 p-6 bg-purple-200 rounded-lg">
            <h2 className="text-4xl font-semibold mb-4 text-blue-700 text-left">About me</h2>
            <p className="text-2xl mb-2 text-blue-900">
              Aspiring Software Engineer with foundational knowledge in full-stack development, recently completing a Diploma in Software Engineering from App Academy. 
            </p>
            <p className="text-2xl mb-2 text-blue-900">
              I have a strong background in management and operations, I bring problem-solving, leadership, and project management skills to every development project. 
            </p>
            <p className="text-2xl mb-2 text-blue-900">
              My experience in high-level coordination, process optimization, and working across multidisciplinary teams enables me to deliver software solutions that meet both technical and business needs. 
            </p>
            <p className="text-2xl mb-2 text-blue-900">
              Eager to apply my technical expertise and business acumen to contribute to impactful software projects.
            </p>
          </div>
        </div>

        {/* Right side: Skills */}
        <div className="w-[1000px]">
          {/* Skills Section in a new container with a different background and larger images */}
          <div className="mt-8 text-blue-700 p-6 bg-purple-200 rounded-lg">
            <h2 className="text-4xl font-semibold mb-4 text-center">Skills</h2>
            <div className="grid grid-cols-5 gap-4">

              {/* Languages Section */}
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-center mb-4">Languages</h3>
                <div className="flex flex-col items-center gap-4">
                  <img src="./JavaScript.png" alt="JavaScript" className="w-36 h-36 object-contain"/>
                  <img src="./python.png" alt="Python" className="w-36 h-36 object-contain"/>
                  <img src="./html_css.jpg" alt="HTML" className="w-36 h-36 object-contain"/>
                </div>
              </div>

              {/* Frameworks Section */}
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-center mb-4">Frameworks</h3>
                <div className="flex flex-col items-center gap-4">
                  <img src="./react.png" alt="React" className="w-36 h-36 object-contain"/>
                  <img src="./node.png" alt="Node.js" className="w-36 h-36 object-contain"/>
                  <img src="./express.png" alt="Express" className="w-36 h-36 object-contain"/>
                </div>
              </div>

              {/* Databases Section */}
              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-center mb-4">Databases</h3>
                <div className="flex flex-col items-center gap-4">
                  <img src="./postgreSQL.png" alt="PostgreSQL" className="w-36 h-36 object-contain"/>
                  <img src="./sqlite.jpg" alt="Sqlite3" className="w-36 h-36 object-contain"/>
                  <img src="./sqlalchemy.png" alt="SQLAlchemy" className="w-36 h-36 object-contain"/>
                </div>
              </div>

              {/* Tools Section */}
              <div className="bg-purple-100 p-6 rounded-lg col-span-2">
                <h3 className="text-2xl font-semibold text-center mb-4">Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-4">
                    <img src="./GitHub.png" alt="GitHub" className="w-36 h-36 object-contain"/>
                    <img src="./visualstudio.png" alt="Visual Studio" className="w-36 h-36 object-contain"/>
                    <img src="./postman.png" alt="Postman" className="w-36 h-36 object-contain"/>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <img src="./mocha_chai.png" alt="Mocha Chai" className="w-36 h-36 object-contain"/>
                    <img src="./restful-api.png" alt="RESTful APIs" className="w-36 h-36 object-contain"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-8 text-blue-700 ml-6">
        <h2 className="text-4xl font-semibold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-2 gap-6">

          {/* Project 1 */}
          <div className="bg-purple-100 rounded-lg shadow-lg p-4 flex flex-col">
            <div className="flex items-center gap-4">
              {/* Left Image */}
              <div className="w-[200px]">
                <img src="./graceclinic.jpg" alt="Grace Clinic" className="w-full h-auto rounded-lg"/>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">Grace Clinic</h3>
                <p className="text-blue-900 mb-2">
                  <strong>Technologies:</strong> JavaScript, React, Node.js, Express, PostgreSQL, JWT Authentication, CSS
                </p>
                <p className="text-blue-900">
                  <strong>Overview:</strong> A full-stack web application that allows Staff and Patients to manage appointments, charting, user information by creating, updating, and deleting tasks. The app provides a simple professional doctor's clinic system.
                </p>
              </div>

              {/* Right Image */}
              <div className="w-[400px]">
                <img src="./gracecliniclandingpage.jpg" alt="Grace Clinic Landing Page" className="w-full h-auto rounded-lg"/>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-100 rounded-lg shadow-lg p-4 flex flex-col">
            <div className="flex items-center gap-4">
              {/* Left Image */}
              <div className="w-[100px]">
                <img src="./lovelypaws.jpg" alt="Lovely Paws" className="w-full h-auto rounded-lg"/>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">Lovely Paws</h3>
                <p className="text-blue-900 mb-2">
                  <strong>Technologies:</strong> Python, SQLAlchemy, Alembic, React, Redux, JWT, AWS, Docker, CSS
                </p>
                <p className="text-blue-900">
                  <strong>Overview:</strong> A full-stack web application that allows for Staff and Clients to manage booking, pet’s information, and services.
                </p>
              </div>

              {/* Right Image */}
              <div className="w-[200px]">
                <img src="./lovelypawslandingpage.jpg" alt="Lovely Paws Landing Page" className="w-full h-auto rounded-lg"/>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-100 rounded-lg shadow-lg p-4 flex flex-col">
            <div className="flex items-center gap-4">
              {/* Left Image */}
              <div className="w-[100px]">
                <img src="./peacefulstay.jpg" alt="Peaceful Stay" className="w-full h-auto rounded-lg"/>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">Peace Stay</h3>
                <p className="text-blue-900 mb-2">
                  <strong>Technologies:</strong> JavaScript, React, Node.js, Express, PostgreSQL, JWT Authentication, CSS
                </p>
                <p className="text-blue-900">
                  <strong>Overview:</strong> A full-stack web application that mimics Airbnb as the first project in the App Academy.
                </p>
              </div>

              {/* Right Image */}
              <div className="w-[200px]">
                <img src="./peacefulstaylandingpage.jpg" alt="Peaceful Stay Landing Page" className="w-full h-auto rounded-lg"/>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  );
}
