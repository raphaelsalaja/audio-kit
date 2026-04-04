import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagRefresh({
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
          d="M12.667 4.75H5.334C4.297 4.75 3.431 5.543 3.341 6.577L2.689 14.077C2.587 15.245 3.508 16.25 4.681 16.25H8.86209C8.86209 16.25 9.25654 16.0878 9.23053 16.0053C9.08076 15.5302 9 15.0246 9 14.5C9 11.7384 11.2384 9.5 14 9.5C14.2443 9.5 14.4844 9.5175 14.7191 9.55131C15.0377 9.59718 14.6885 6.9432 14.659 6.577C14.57 5.543 13.704 4.75 12.667 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
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
          d="M14.25 13.75H16.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 16.387C15.499 16.918 14.788 17.25 14 17.25C12.481 17.25 11.25 16.019 11.25 14.5C11.25 12.981 12.481 11.75 14 11.75C15.166 11.75 16.162 12.476 16.563 13.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8541 8.8281L14.658 6.5769C14.568 5.5439 13.703 4.75 12.666 4.75H5.33397C4.29697 4.75 3.43097 5.543 3.34197 6.5769L2.68997 14.0769C2.58797 15.2451 3.50997 16.25 4.68197 16.25H8.52437"
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

export default BagRefresh;
