import StatCard from "../components/StatCard";
import RecentGames from "../components/RecentGames";

function Dashboard() {

  return (

    <div className="dashboard">

      <h1>🎮 Dashboard</h1>

      <div className="stats">

        <StatCard
          icon="🎮"
          title="Games"
          value="4"
        />

        <StatCard
          icon="🏆"
          title="Wins"
          value="12"
        />

        <StatCard
          icon="⭐"
          title="Score"
          value="580"
        />

        <StatCard
          icon="🔥"
          title="Streak"
          value="7 Days"
        />

      </div>

      <RecentGames />

    </div>

  );

}

export default Dashboard;