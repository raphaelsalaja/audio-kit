import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletContent({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M3 4.75C3 4.05921 3.55921 3.5 4.25 3.5C4.66421 3.5 5 3.16421 5 2.75C5 2.33579 4.66421 2 4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V13.25C1.5 14.7692 2.73079 16 4.25 16H14.75C15.7162 16 16.5 15.2162 16.5 14.25V7.75C16.5 6.78379 15.7162 6 14.75 6H4.25C3.55921 6 3 5.44079 3 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.56287 1.46041C6.98528 0.591224 8.03153 0.229935 8.90027 0.651197L14.9143 3.56822C15.2286 3.72067 15.3961 4.06992 15.3181 4.41044C15.2401 4.75095 14.9374 4.99254 14.5881 4.99303L6.03108 5.00506C5.77209 5.00542 5.53124 4.87214 5.394 4.6525C5.25675 4.43287 5.24254 4.15796 5.35639 3.92534L6.56287 1.46041Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.75 12.25C13.44 12.25 14 11.69 14 11C14 10.31 13.44 9.75 12.75 9.75C12.06 9.75 11.5 10.31 11.5 11C11.5 11.69 12.06 12.25 12.75 12.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WalletContent;
