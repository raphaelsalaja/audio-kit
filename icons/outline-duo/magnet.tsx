import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Magnet({
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
          d="M12.2545 5.24213L12.641 8.333C12.771 9.377 12.446 10.429 11.75 11.218C11.054 12.007 10.05 12.46 8.99803 12.46C7.94603 12.46 6.94303 12.007 6.24603 11.218C5.54903 10.429 5.22503 9.377 5.35503 8.333L5.74224 5.23651L2.51385 4.86905L2.14003 7.859C2.02303 8.793 2.06003 9.75 2.32403 10.654C3.23603 13.776 6.01203 15.71 9.00003 15.71H8.99603C11.984 15.71 14.76 13.777 15.672 10.654C15.936 9.75 15.973 8.793 15.856 7.859L15.4752 4.81271L12.2545 5.24213Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.51801 4.838L5.74301 5.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.482 4.838L12.257 5.242"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00003 15.71C6.01203 15.71 3.23603 13.776 2.32403 10.654C2.06003 9.75001 2.02303 8.79301 2.14003 7.85901L2.76303 2.87601C2.83203 2.32801 3.33103 1.93901 3.87903 2.00801L5.11903 2.16301C5.66703 2.23201 6.05603 2.73101 5.98703 3.27901L5.35503 8.33301C5.22503 9.37701 5.54903 10.429 6.24603 11.218C6.94303 12.007 7.94603 12.46 8.99803 12.46C10.05 12.46 11.054 12.007 11.75 11.218C12.446 10.429 12.771 9.37701 12.641 8.33301L12.009 3.27901C11.94 2.73101 12.329 2.23101 12.877 2.16301L14.117 2.00801C14.665 1.93901 15.165 2.32801 15.233 2.87601L15.856 7.85901C15.973 8.79301 15.936 9.75001 15.672 10.654C14.76 13.777 11.984 15.71 8.99603 15.71H9.00003Z"
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

export default Magnet;
