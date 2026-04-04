import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagPlus({
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
          d="M12.667 4.75H5.334C4.297 4.75 3.431 5.543 3.341 6.577L2.689 14.077C2.587 15.245 3.508 16.25 4.681 16.25H12.25C12.25 16.0611 12.1325 15.5688 11.9063 15.5322C10.8268 15.3576 10 14.3758 10 13.25C10 12.0074 11.0074 11 12.25 11H12.5V10.75C12.5 9.50736 13.5074 8.5 14.75 8.5C14.9683 8.5 14.6805 6.77983 14.659 6.577C14.57 5.543 13.704 4.75 12.667 4.75Z"
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
          d="M14.75 10.75V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 13.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.7605 7.751L14.658 6.5769C14.569 5.543 13.703 4.75 12.666 4.75H5.33301C4.29601 4.75 3.43101 5.543 3.34101 6.5769L2.689 14.0769C2.587 15.2451 3.508 16.25 4.681 16.25H11.807"
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

export default BagPlus;
