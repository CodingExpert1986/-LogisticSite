function StatsSection() {
  const stats = [
    { value: "1,526", label: "Satisfied Clients" },
    { value: "1,451K", label: "KM Per Year" },
    { value: "9,435", label: "Delivered Packages" },
    { value: "12,168", label: "Tons Of Goods" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <button className="stat-card" type="button" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;