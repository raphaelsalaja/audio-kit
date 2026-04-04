import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wallet2({
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
          d="M13.5028 2.07856C13.1582 1.38927 12.4027 1.0061 11.6429 1.13564L5.08061 2.25569C3.01253 2.60925 1.5 4.40138 1.5 6.49997C1.5 6.5286 1.50164 6.55704 1.50485 6.58519C1.59004 5.14276 2.78612 4 4.25 4H13.75C13.9233 4 14.0929 4.01603 14.2574 4.04668C14.2357 3.98275 14.2141 3.91867 14.1925 3.85451C13.9882 3.24883 13.7815 2.63594 13.5028 2.07856Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M4.25 4C2.73079 4 1.5 5.23079 1.5 6.75V13.25C1.5 14.7692 2.73079 16 4.25 16H13.75C15.2692 16 16.5 14.7692 16.5 13.25V6.75C16.5 5.23079 15.2692 4 13.75 4H4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16 11.75H13C12.034 11.75 11.25 10.966 11.25 10C11.25 9.033 12.034 8.25 13 8.25H16C16.552 8.25 17 8.698 17 9.25V10.75C17 11.302 16.552 11.75 16 11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Wallet2;
