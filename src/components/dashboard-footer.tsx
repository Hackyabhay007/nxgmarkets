import { Link } from "react-router-dom";

const DashboardFooter = () => {
  return (
    <footer className="flex items-center justify-between pt-16 pb-4">
      <div className="text-center">NXG Markets © 2025</div>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-3  text-sm">
        <Link
          to="/aml-policy"
          className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
        >
          AML Policy
        </Link>
        <Link
          to="/contact-us"
          className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
        >
          Contact Us
        </Link>
        <Link
          to="/privacy-policy"
          className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
        >
          Privacy Policy
        </Link>
        <Link
          to="/refund-policy"
          className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
        >
          Refund Policy
        </Link>
        <Link
          to="/terms-conditions"
          className="text-base text-gray-500 hover:text-[#b52c61] hover:underline transition-all duration-200"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default DashboardFooter;
