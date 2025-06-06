import { Link } from "@remix-run/react";

export default function PortfolioUnderConstruction() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">🎬 Scene in Progress</h1>
        <div className="space-y-4">
          <p className="text-xl">
            Our portfolio is currently in post-production. We're adding the final touches, color grading, and that perfect soundtrack.
          </p>
          <p className="text-lg text-gray-300">
            In the meantime, why not check out our{" "}
            <Link to="/blog" className="text-pine hover:text-green-400 underline">
              latest insights
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="text-pine hover:text-green-400 underline">
              get in touch
            </Link>{" "}
            to discuss your next project?
          </p>
          <div className="mt-8">
            <div className="inline-block bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-400">Estimated Release: Coming Soon</p>
              <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-pine animate-pulse" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 