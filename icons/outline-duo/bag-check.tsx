import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagCheck({
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
          d="M12.6671 4.75C13.704 4.75004 14.5703 5.54318 14.6593 6.57715V8.54004C14.4431 8.51414 14.2232 8.5 14.0001 8.5C10.9654 8.5 8.50008 10.9661 8.50008 14C8.50008 14.6951 8.63028 15.36 8.86629 15.9727L4.68074 16.25C3.50792 16.2499 2.58667 15.245 2.68855 14.0771L3.3409 6.57715C3.4309 5.54315 4.29706 4.75 5.33406 4.75H12.6671Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3076 13.252L14.0576 15.752C13.9199 15.9048 13.7256 15.9942 13.5195 15.9996C13.5127 16.0001 13.5068 16.0001 13.5 16.0001C13.3018 16.0001 13.1104 15.9215 12.9697 15.7804L11.7197 14.5304C11.4267 14.2374 11.4267 13.7628 11.7197 13.4699C12.0127 13.177 12.4873 13.1769 12.7802 13.4699L13.4716 14.1608L15.1923 12.2482C15.4706 11.9416 15.9433 11.9162 16.2519 12.1925C16.5595 12.4698 16.5849 12.9439 16.3076 13.252Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.7655 7.8018L14.659 6.5769C14.569 5.5439 13.704 4.75 12.667 4.75H5.33397C4.29697 4.75 3.43097 5.543 3.34197 6.5769L2.68997 14.0769C2.58797 15.2451 3.50997 16.25 4.68197 16.25H8.17566"
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

export default BagCheck;
