import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import InstagramIcon from "lucide-react/dist/esm/icons/instagram";
import bgImage from "../assets/atlanta-street-bg.jpg";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Pour Vibes ATL | Premier Mobile Bar</title>
        <meta
          name="description"
          content="Pour Vibes ATL is Atlanta’s premier mobile bar service, bringing artsy cocktail vibes to your private events, weddings, and parties. Book us now!"
        />
        <meta property="og:title" content="Pour Vibes ATL | Premier Mobile Bar" />
        <meta
          property="og:description"
          content="Atlanta’s artsy mobile bar experience — cocktails with culture and vibes. Book your event today!"
        />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-earth-light relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 text-center w-full max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Pour Vibes ATL
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Atlanta's premier mobile bar experience 🍹🎨
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a
              href="https://www.instagram.com/pourvibes_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition w-full sm:w-auto"
            >
              <InstagramIcon className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8ErfymAqCoTgjP8796QdQ5rL_rzsqdgERVROroAi-wPAAYA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-golden-brown text-black px-6 py-3 rounded-full font-semibold transition w-full sm:w-auto"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default LandingPage;
