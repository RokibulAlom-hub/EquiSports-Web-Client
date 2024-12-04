import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Website Name */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold">GearChamps</h1>
          <p>&copy; {new Date().getFullYear()} GearChamps. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: contact@gearchamps.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-content hover:text-primary"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-content hover:text-primary"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-content hover:text-primary"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-content hover:text-primary"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
