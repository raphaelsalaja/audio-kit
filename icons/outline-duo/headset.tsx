import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headset({
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
          d="M1.50035 9.70626C1.37397 9.04794 1.69974 8.38568 2.29835 8.08398L3.80577 7.32425L4.99471 13.2891L3.312 13.1817C2.6298 13.1382 2.06332 12.6389 1.93445 11.9676L1.50035 9.70626Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.4943 9.70626C16.6207 9.04794 16.2949 8.38568 15.6963 8.08398L14.1889 7.32425L13 13.2891L14.6827 13.1817C15.3649 13.1382 15.9314 12.6389 16.0602 11.9676L16.4943 9.70626Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 13.25L12.658 14.697C12.45 15.606 11.641 16.25 10.709 16.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75001 7.353L2.62701 7.92C1.81401 8.331 1.38101 9.239 1.57401 10.129L1.90901 11.674C2.10801 12.594 2.92201 13.25 3.86401 13.25H5.00101L3.91701 8.25C3.81801 7.847 3.75101 7.433 3.75101 7C3.75101 4.101 6.10201 1.75 9.00101 1.75C11.9 1.75 14.251 4.101 14.251 7C14.251 7.433 14.184 7.847 14.085 8.25L13.001 13.25H14.138C15.079 13.25 15.893 12.594 16.093 11.674L16.428 10.129C16.621 9.239 16.188 8.33 15.375 7.92L14.252 7.353"
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

export default Headset;
