export const Title = ({ title, variant }: { title: string, variant: 'large' | 'medium' }) => {
  const size = variant === 'large' ? 'text-4xl' : 'text-2xl';
  
  return (
    <div className="w-full flex justify-start items-center gap-3 ms-8 mt-3">
      <svg
        width="6"
        height="39"
        viewBox="0 0 6 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6" />
      </svg>
      <h1 className={`${size} font-bold text-black uppercase self-start`}>
        {title}
      </h1>
    </div>
  );
}