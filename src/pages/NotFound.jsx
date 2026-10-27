import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center bg-white text-slate-800">
      <span className="font-display text-7xl font-black text-sky-600">404</span>
      <h1 className="mt-4 font-display text-2xl font-black uppercase text-slate-900">Page not found</h1>
      <p className="mt-3 text-sm text-slate-600 font-medium">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8 text-xs font-black uppercase tracking-wider">
        Back to Home
      </Link>
    </div>
  )
}
