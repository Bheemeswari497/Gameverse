function StatCard({ title, value, icon }) {

  return (
    <div className="stat-card">
      <h2>{icon}</h2>
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );

}

export default StatCard;