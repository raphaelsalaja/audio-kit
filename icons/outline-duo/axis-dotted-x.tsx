import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisDottedX({
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
          d="M13.763 13.225L16.237 10.75L13.763 8.27499"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 10.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 2.5C7.164 2.5 7.5 2.164 7.5 1.75C7.5 1.336 7.164 1 6.75 1C6.336 1 6 1.336 6 1.75C6 2.164 6.336 2.5 6.75 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 5.5C7.164 5.5 7.5 5.164 7.5 4.75C7.5 4.336 7.164 4 6.75 4C6.336 4 6 4.336 6 4.75C6 5.164 6.336 5.5 6.75 5.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 8.5C7.164 8.5 7.5 8.164 7.5 7.75C7.5 7.336 7.164 7 6.75 7C6.336 7 6 7.336 6 7.75C6 8.164 6.336 8.5 6.75 8.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.25 17.5C1.66421 17.5 2 17.1642 2 16.75C2 16.3358 1.66421 16 1.25 16C0.835786 16 0.5 16.3358 0.5 16.75C0.5 17.1642 0.835786 17.5 1.25 17.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.25 15.5C3.66421 15.5 4 15.1642 4 14.75C4 14.3358 3.66421 14 3.25 14C2.83579 14 2.5 14.3358 2.5 14.75C2.5 15.1642 2.83579 15.5 3.25 15.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.25 13.5C5.66421 13.5 6 13.1642 6 12.75C6 12.3358 5.66421 12 5.25 12C4.83579 12 4.5 12.3358 4.5 12.75C4.5 13.1642 4.83579 13.5 5.25 13.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default AxisDottedX;
