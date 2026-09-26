function StatsSection() {
  const stats = [
    { value: "24/7", label: "Cargo Support" },
    { value: "4+", label: "Transport Services" },
    { value: "100%", label: "Project Focus" },
    { value: "Fast", label: "Delivery Solutions" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
