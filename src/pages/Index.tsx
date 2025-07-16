import CGPACalculator from "@/components/CGPACalculator";

export default function WelcomePage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="w-full px-0 sm:px-4">
        <CGPACalculator />
      </div>
    </div>
  );
}
