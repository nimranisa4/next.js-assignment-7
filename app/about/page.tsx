// app/about/page.tsx
export default function About() {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          At GB Cater & Decorator, we believe that food is the heart of every event. 
          Our team is passionate about creating delicious dishes that bring people together, 
          celebrating milestones with flavor and flair.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:mr-4 mb-6 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional catering services that exceed our clients' expectations 
              and create memorable experiences for every occasion.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Quality: We use only the freshest ingredients.</li>
              <li>Service: Our team is dedicated to excellent customer service.</li>
              <li>Creativity: We craft unique menus tailored to your needs.</li>
              <li>Community: We believe in giving back to our local community.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-700 mt-4">
            With years of experience in the catering industry, 
            GB Cater & Decorator offers a wide range of menu options 
            and personalized service to make your event unforgettable.
          </p>
          <p className="text-gray-700 mt-2">
            Whether it's a wedding, corporate event, or family gathering, 
            we have the expertise to make it a success!
          </p>
        </div>
      </div>
    );
  }
  