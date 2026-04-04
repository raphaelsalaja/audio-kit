import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagUser({
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
          d="M12.6671 4.75C13.704 4.75004 14.5703 5.54318 14.6593 6.57715L14.7833 8.01367C14.69 8.00494 14.5956 8 14.5001 8C12.8433 8 11.5001 9.34317 11.5001 11C11.5001 11.6182 11.6874 12.1925 12.0079 12.6699C11.0498 13.2249 10.2824 14.0951 9.86141 15.166C9.73189 15.5175 9.64221 15.8718 9.64266 16.25H4.68074C3.50792 16.2499 2.58667 15.245 2.68855 14.0771L3.3409 6.57715C3.4309 5.54315 4.29706 4.75 5.33406 4.75H12.6671Z"
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
          d="M14.5 12.5C15.3284 12.5 16 11.8284 16 11C16 10.1716 15.3284 9.5 14.5 9.5C13.6716 9.5 13 10.1716 13 11C13 11.8284 13.6716 12.5 14.5 12.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.7194 7.27219L14.659 6.57589C14.569 5.54289 13.704 4.74899 12.667 4.74899H5.33399C4.29699 4.74899 3.43099 5.54199 3.34209 6.57589L2.69009 14.0759C2.58809 15.2439 3.51009 16.249 4.68209 16.249H8.91559"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.6011 17.5H12.399C11.9923 17.5 11.6085 17.3013 11.3717 16.9683C11.1393 16.6407 11.0787 16.2207 11.2096 15.8453C11.6979 14.443 13.0201 13.5001 14.5001 13.5001C15.9801 13.5001 17.3023 14.443 17.7911 15.8458C17.9215 16.2208 17.8609 16.6407 17.6285 16.9684C17.3917 17.3014 17.0078 17.5 16.6011 17.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BagUser;
