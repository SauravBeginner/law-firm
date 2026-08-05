import { Link } from "react-router-dom";
import { Scale } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <Scale size={40} className="text-bronze mb-6" strokeWidth={1.5} />
      <h1 className="text-3xl font-semibold">Page Not Found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button variant="bronze">Return Home</Button>
      </Link>
    </div>
  );
}
