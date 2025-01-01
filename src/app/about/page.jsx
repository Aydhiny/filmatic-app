import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="max-w-6xl h-screen xl:mt-0 mt-12 mx-auto justify-center flex flex-col p-4">
      <h1 className="text-3xl sm:text-4xl font-medium text-purple-500 mb-6 text-center sm:text-left">
        About
      </h1>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to Filmatic, your cinematic haven where stories, artistry, and
        the love of film come together. Whether you&apos;re a casual moviegoer,
        a devoted film buff, or an aspiring filmmaker, Filmatic is designed to
        be your go-to platform for all things film. Here, we believe that every
        movie has a story to tell, and every viewer has a unique connection to
        it. Our mission is to deepen those connections by offering a space where
        you can explore, learn, and share the world of cinema like never before.
        <br /> <br />
        <strong>What We Offer:</strong> At Filmatic, we go beyond just showing
        trailers or giving you a synopsis. Our platform offers:
        <br /> <br />
        <ul className="list-disc list-inside pl-4">
          <li>
            <strong>In-Depth Reviews:</strong> Dive into reviews crafted by film
            enthusiasts who explore movies from every angle—narrative,
            cinematography, acting, sound, and more.
          </li>
          <li>
            <strong>Curated Lists:</strong> Discover films you might have missed
            with our handpicked lists covering everything from the latest
            releases to obscure hidden gems.
          </li>
          <li>
            <strong>Exclusive Interviews and Insights:</strong> Get a closer
            look behind the scenes with interviews from directors, actors,
            writers, and industry insiders.
          </li>
          <li>
            <strong>Film Industry News:</strong> Stay updated with the latest
            news in the movie world, including announcements, festival
            highlights, and industry trends.
          </li>
          <li>
            <strong>Community Discussions:</strong> Share your thoughts,
            participate in debates, and connect with other movie lovers.
          </li>
        </ul>
        <br />
        <strong>Why Filmatic?</strong> In a world where countless movies are
        released every year, finding a platform that curates quality content and
        fosters a genuine love for cinema is essential. Filmatic was created by
        movie enthusiasts for movie enthusiasts, and we&apos;re passionate about
        providing a personalized experience that goes beyond just watching.
        <br /> <br />
        <strong>Join Us in the Journey:</strong> Whether you&apos;re here to
        find your next favorite movie, learn more about the history of cinema,
        or simply indulge in your passion, Filmatic is here to make your movie
        experience more meaningful and exciting. Join our community, share your
        thoughts, and let&apos;s celebrate the magic of movies together.
      </p>
      <div className="mt-8 flex justify-center sm:justify-start">
        <Link
          className="rounded-xl bg-gray-700 text-white hover:bg-purple-600 font-bold text-center py-2 px-6 transition-colors duration-300"
          href="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default About;
