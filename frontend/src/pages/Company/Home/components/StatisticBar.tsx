import { StatisticCard } from "./StatisticCard";

export const StatisticBar = () => {
  return (
    <div className="flex flex-row gap-10 h-40 mt-8">
      <StatisticCard title="Employed" value={10} className="bg-cyan-100" />
      <StatisticCard
        title="Hiring position"
        value={100}
        className="bg-rose-100"
      />
      <StatisticCard
        title="Unpaid bill"
        value={"$1000"}
        className="bg-yellow-100"
      />
      <StatisticCard title="Users" value={3} className="yellow-gradient" />
    </div>
  );
};
