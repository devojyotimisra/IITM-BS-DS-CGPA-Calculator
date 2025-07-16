import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 text-center text-white">
      <div className="space-y-6 max-w-md">
        <div className="space-y-3">
          <h1 className="text-8xl font-bold text-white">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300">Page Not Found</h2>
          <p className="text-gray-500">The page you're looking for doesn't exist or may have been moved.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="secondary">
            <a href="/">Return Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
