import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tl from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 blur-lg opacity-20 rounded-lg"></div>
              <h3 className="relative text-4xl font-black bg-gradient-to-r from-primary-400 via-purple-400 to-primary-600 bg-clip-text text-transparent">
                JobPortal
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Your trusted partner in finding the perfect career opportunity.
              Connect with top employers and build your professional future with
              confidence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/jineshpande15"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent mb-6">
              For Job Seekers
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/jobs"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/companies"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Companies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              For Employers
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Browse Candidates
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-gray-700/50 mt-16 pt-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent h-px top-0"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400 mb-6 md:mb-0">
              <a className="group relative hover:text-white transition-colors duration-300">
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-2"></div>
              </a>
              <a className="group relative hover:text-white transition-colors duration-300">
                <span className="relative z-10">Terms of Service</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-2"></div>
              </a>
              <a className="group relative hover:text-white transition-colors duration-300">
                <span className="relative z-10">Cookie Policy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-2"></div>
              </a>
              <Link
                to="/contact"
                className="group relative hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-2"></div>
              </Link>
            </div>
            <div className="text-center md:text-right">
              <div className="text-gray-400 text-sm mb-2">
                © 2026 JobPortal. All rights reserved.
              </div>
              <div className="text-xs text-gray-500">
                Made with ❤️ for job seekers worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
