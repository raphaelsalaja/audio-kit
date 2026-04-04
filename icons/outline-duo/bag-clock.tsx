import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagClock({
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
          d="M14.7655 7.8018L14.659 6.5769C14.569 5.5439 13.704 4.75 12.667 4.75H5.33397C4.29697 4.75 3.43097 5.543 3.34197 6.5769L2.68997 14.0769C2.58797 15.2451 3.50997 16.25 4.68197 16.25H8.17566"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10C11.7939 10 10 11.7944 10 14C10 16.2056 11.7939 18 14 18C16.2061 18 18 16.2056 18 14C18 11.7944 16.2061 10 14 10ZM16.3125 14.9502C16.1934 15.2398 15.9141 15.415 15.6191 15.415C15.5234 15.415 15.4277 15.3969 15.3339 15.3588L13.7148 14.6938C13.4336 14.5781 13.25 14.3042 13.25 14V12.25C13.25 11.8359 13.5859 11.5 14 11.5C14.4141 11.5 14.75 11.8359 14.75 12.25V13.4971L15.9043 13.9712C16.2871 14.1284 16.4707 14.5669 16.3125 14.9502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BagClock;
