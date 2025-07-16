import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6 text-center text-white">
      <div className="space-y-6 max-w-md">
        <div className="space-y-3 overflow-x-auto">
          <h1 className="text-8xl font-bold text-white whitespace-nowrap">Opps!!! 🙂</h1>
          <h2 className="text-2xl font-semibold text-gray-300 whitespace-nowrap">
            The page you're looking for doesn't exist.
          </h2>
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
