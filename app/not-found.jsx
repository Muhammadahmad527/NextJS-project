import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound-container pt-30">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/StoriesNineteen.mp4" type="video/mp4" />
      </video>

      <h1 className="error-text">404</h1>
      <p className="message">Page Not Found</p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-transparent hover:border-3 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
