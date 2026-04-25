import { Suspense } from "react";
import TeamContent from "@/components/teamContent";

function LoadingFallback() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-linen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-stone/20 border-t-verdant rounded-full animate-spin" />
        <p className="t-label text-stone">Loading team...</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <TeamContent />
    </Suspense>
  );
}