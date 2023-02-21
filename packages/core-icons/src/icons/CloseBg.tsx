interface Props {
  className?: string;
  onClick?: () => void;
}
export const CloseBg = ({ className, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill="#DDDDDD"
        />
        <path
          d="M9.05994 8L11.0299 6.03C11.3199 5.74 11.3199 5.26 11.0299 4.97C10.7399 4.68 10.2599 4.68 9.96994 4.97L7.99994 6.94L6.02994 4.97C5.73994 4.68 5.25994 4.68 4.96994 4.97C4.67994 5.26 4.67994 5.74 4.96994 6.03L6.93994 8L4.96994 9.97C4.67994 10.26 4.67994 10.74 4.96994 11.03C5.11994 11.18 5.30994 11.25 5.49994 11.25C5.68994 11.25 5.87994 11.18 6.02994 11.03L7.99994 9.06L9.96994 11.03C10.1199 11.18 10.3099 11.25 10.4999 11.25C10.6899 11.25 10.8799 11.18 11.0299 11.03C11.3199 10.74 11.3199 10.26 11.0299 9.97L9.05994 8Z"
          fill="#666666"
        />
      </svg>
    </div>
  );
};
