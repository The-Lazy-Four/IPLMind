import LeaderboardClient from "@/components/LeaderboardClient";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leaderboard | IPLMind",
  description: "Global AI Cricket Intelligence Leaderboard",
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex flex-col" data-theme="ipl">
      <main className="flex-grow">
        <LeaderboardClient />
      </main>
      <Footer />
    </div>
  );
}
