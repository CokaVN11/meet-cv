// A Statistic Card Component can pass the className and style props to the parent component
// to the parent component
interface StatisticCardProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  value: number | string;
}

export const StatisticCard = (props: StatisticCardProps) => {
  return (
    <div
      className={`w-1/4 h-full flex flex-col justify-end rounded-lg shadow-md pb-6 ${props.className}`}
      style={props.style}
    >
      <p className="text-lg font-medium mr-auto ml-4">{props.title}</p>
      <p className="text-2xl font-bold ml-auto mr-4">{props.value}</p>
    </div>
  );
}