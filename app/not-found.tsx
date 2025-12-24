"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Icon */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-green-400">404</h1>
          <p className="text-2xl font-bold text-white">Page Not Found</p>
        </div>

        {/* Error Description */}
        <div className="space-y-3">
          <p className="text-gray-400 text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500 text-sm">
            Don't worry, you can always go back to the home page.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-900 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="bg-green-400 text-black hover:bg-green-500 flex items-center justify-center gap-2 font-semibold"
          >
            <Home size={18} />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
