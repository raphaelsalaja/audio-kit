import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartDonut3({
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
          d="M9 12.75C11.071 12.75 12.75 11.071 12.75 8.99999H16.25C16.25 13.004 13.004 16.25 9 16.25C7.00005 16.25 5.18921 15.4402 3.87753 14.1305L6.35241 11.6556C7.03071 12.3319 7.96655 12.75 9 12.75ZM9 5.24999C7.98044 5.24999 7.05589 5.65692 6.3799 6.31721L3.90487 3.84218C5.21432 2.54839 7.01391 1.74949 9 1.74899C11 1.74899 12.811 2.55899 14.123 3.86899L11.65 6.34599C10.971 5.66899 10.035 5.24999 9 5.24999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.348 6.348L3.875 3.875"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.348 11.652L3.875 14.125"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 8.99999C12.75 11.071 11.071 12.75 9 12.75C6.929 12.75 5.25 11.071 5.25 8.99999C5.25 6.92899 6.929 5.24999 9 5.24999C10.035 5.24999 10.971 5.66899 11.65 6.34599L14.123 3.86899C12.811 2.55899 11 1.74899 9 1.74899C4.996 1.74999 1.75 4.99599 1.75 8.99999C1.75 13.004 4.996 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 8.99999H12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ChartDonut3;
