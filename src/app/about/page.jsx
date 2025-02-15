import Link from "next/link";
import React from "react";
import { 
  FiFilm, 
  FiStar, 
  FiAward, 
  FiMessageSquare, 
  FiBookOpen, 
  FiUsers,
  FiChevronLeft,
} from "react-icons/fi";

function About() {
  return (
    <div
     className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center  py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}> 
      <div className="max-w-7xl mx-auto">
        <div className="mb-12"> 
          <Link
            className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg inline-flex items-center" // Improved button styling
            href="/"
          >
            <FiChevronLeft className="mr-2" /> Back to Home
          </Link>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-purple-400 mb-8 text-center sm:text-left drop-shadow-lg"> 
          About Filmatic
        </h1>

        <div className="prose lg:prose-xl text-zinc-400 leading-relaxed"> 
          <p className="text-lg"> 
            Welcome to Filmatic, your cinematic haven where stories, artistry, and the love of film come together. Whether you're a casual moviegoer, a devoted film buff, or an aspiring filmmaker, Filmatic is designed to be your go-to platform for all things film. Here, we believe that every movie has a story to tell, and every viewer has a unique connection to it. Our mission is to deepen those connections by offering a space where you can explore, learn, and share the world of cinema like never before.
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8"><FiFilm className="inline-block mr-2 text-purple-500" /> What We Offer</h2> 
          <ul className="list-disc list-inside text-lg"> 
            <li>
              <FiStar className="inline-block mr-2 text-yellow-400" /> <strong className="text-white">In-Depth Reviews:</strong> Dive into reviews crafted by film enthusiasts who explore movies from every angle—narrative, cinematography, acting, sound, and more.
            </li>
            <li>
              <FiAward className="inline-block mr-2 text-amber-400" /> <strong className="text-white">Curated Lists:</strong> Discover films you might have missed with our handpicked lists covering everything from the latest releases to obscure hidden gems.
            </li>
            <li>
              <FiBookOpen className="inline-block mr-2 text-blue-400" /> <strong className="text-white">Exclusive Interviews and Insights:</strong> Get a closer look behind the scenes with interviews from directors, actors, writers, and industry insiders.
            </li>
            <li>
              <FiMessageSquare className="inline-block mr-2 text-teal-400" /> <strong className="text-white">Film Industry News:</strong> Stay updated with the latest news in the movie world, including announcements, festival highlights, and industry trends.
            </li>
            <li>
              <FiUsers className="inline-block mr-2 text-fuchsia-400" /> <strong className="text-white">Community Discussions:</strong> Share your thoughts, participate in debates, and connect with other movie lovers.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mb-4 mt-8"><FiFilm className="inline-block mr-2 text-purple-500" /> Why Filmatic?</h2> 
          <p className="text-lg">
            In a world where countless movies are released every year, finding a platform that curates quality content and fosters a genuine love for cinema is essential. Filmatic was created by movie enthusiasts for movie enthusiasts, and we're passionate about providing a personalized experience that goes beyond just watching. We believe that film is more than just entertainment; it's a powerful medium that can educate, inspire, and connect us all.
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8"><FiUsers className="inline-block mr-2 text-purple-500" /> Our Team</h2>
          <p className="text-lg">
            Filmatic is built by a team of dedicated film lovers with diverse backgrounds and a shared passion for cinema. We are committed to providing you with the best possible experience and are constantly working to improve and expand our platform. We are always open to feedback and suggestions from our community.
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8"><FiMessageSquare className="inline-block mr-2 text-purple-500" /> Contact Us</h2>
          <p className="text-lg">
            Have questions, suggestions, or feedback? We'd love to hear from you! You can reach us at [your_email@example.com](mailto:your_email@example.com). Follow us on social media for the latest updates and discussions: [links to your social media].
          </p>

          <h2 className="text-3xl font-semibold mb-4 mt-8"><FiStar className="inline-block mr-2 text-purple-500" /> Join Us in the Journey</h2>
          <p className="text-lg">
            Whether you're here to find your next favorite movie, learn more about the history of cinema, or simply indulge in your passion, Filmatic is here to make your movie experience more meaningful and exciting. Join our community, share your thoughts, and let's celebrate the magic of movies together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;