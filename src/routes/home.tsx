import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { Sparkles } from "lucide-react";

// MarqueImg component to render each logo image in the marquee
const MarqueImg = ({ img, alt }) => {
  return (
    <img
      src={img}
      alt={alt || "partner logo"}
      className="mx-10 h-20 object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out cursor-pointer"
    />
  );
};

const HomePage = () => {
  return (
    <div className="flex flex-col w-full pb-32 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Hero Section */}
        <div className="my-12 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            AI Superpower
          </h1>
          <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-gray-700">
            Unlock Your Interview Potential with Smart AI Assistance
          </h2>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-gray-600 text-lg">
            Practice smarter, learn faster, and land your dream job with personalized AI-driven interview coaching designed to boost your confidence and skills.
          </p>
          <Link to="/generate">
            <Button className="mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg flex items-center justify-center mx-auto md:mx-0">
              Get Started <Sparkles className="ml-3 animate-pulse" />
            </Button>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-12 mt-16">
          <div className="text-center">
            <p className="text-5xl font-bold text-indigo-600">500+</p>
            <p className="mt-2 text-gray-500 uppercase tracking-wide font-semibold">
              Mock Interviews Ready
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-purple-600">Thousands</p>
            <p className="mt-2 text-gray-500 uppercase tracking-wide font-semibold">
              Questions To Practice
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-pink-600">100%</p>
            <p className="mt-2 text-gray-500 uppercase tracking-wide font-semibold">
              Focus On Your Growth
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-green-600">AI-Powered</p>
            <p className="mt-2 text-gray-500 uppercase tracking-wide font-semibold">
              Interview Prep
            </p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-teal-600">Made For You</p>
            <p className="mt-2 text-gray-500 uppercase tracking-wide font-semibold">
              Personalized Practice
            </p>
          </div>
        </div>


        {/* Image & Call to Action Section */}
        <div className="relative mt-20 rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto bg-gradient-to-tr from-indigo-100 to-purple-100">
          <img
            src="/assets/img/hero.jpg"
            alt="AI interview"
            className="w-full h-[450px] object-cover"
          />
          <div className="absolute top-5 left-5 bg-white bg-opacity-70 backdrop-blur-sm rounded-md px-5 py-3 text-indigo-800 font-semibold shadow-md">
            Interview Copilot&copy;
          </div>
          <div className="hidden md:flex flex-col absolute bottom-6 right-6 bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Coaching</h3>
            <p className="text-gray-700 text-sm mb-4">
              Personalized feedback and practice sessions to sharpen your skills and ace your interviews confidently.
            </p>
            <Link to="/generate">

              <Button className="self-start bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md shadow-md flex items-center">
                Generate <Sparkles className="ml-2 animate-pulse" />
              </Button>

            </Link>
          </div>
        </div>
      </Container>

      {/* Marquee Section */}
      <div className="my-16 bg-white py-8 shadow-inner">
        <Marquee pauseOnHover speed={60} gradient={false}>
          <MarqueImg img="/assets/img/logo/firebase.png" alt="Firebase logo" />
          <MarqueImg img="/assets/img/logo/meet.png" alt="Google Meet logo" />
          <MarqueImg img="/assets/img/logo/zoom.png" alt="Zoom logo" />
          <MarqueImg img="/assets/img/logo/microsoft.png" alt="Microsoft logo" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" alt="Tailwind CSS logo" />
          <MarqueImg img="/assets/img/logo/firebase.png" alt="Firebase logo" />
          <MarqueImg img="/assets/img/logo/meet.png" alt="Google Meet logo" />
          <MarqueImg img="/assets/img/logo/microsoft.png" alt="Microsoft logo" />
        </Marquee>
      </div>

      <Container className="py-12 space-y-12">
        {/* About Section */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-center text-gray-800">
          Unleash Your Potential with AI-Driven Interview Practice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt="People collaborating in office"
              className="rounded-lg shadow-lg w-full max-h-96 object-cover"
            />
          </div>

          <div className="md:col-span-2 flex flex-col justify-center items-center text-center space-y-6">
            <p className="text-gray-600 max-w-md leading-relaxed text-lg">
              Transform your preparation process with tailored AI insights that help you practice smarter, build confidence, and improve your interview success rate. Join thousands of satisfied users taking their careers to the next level.
            </p>

            <Link to={"/generate"} className="w-full max-w-xs">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg shadow-md flex justify-center items-center">
                Start Generating <Sparkles className="ml-3 animate-pulse" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
