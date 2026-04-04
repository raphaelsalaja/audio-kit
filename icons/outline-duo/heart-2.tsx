import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2({
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
          d="M15.2 9.222L9.71999 14.916C9.32699 15.325 8.67199 15.325 8.27899 14.916L2.79899 9.222C1.34699 7.694 1.40999 5.278 2.93799 3.827C4.46599 2.375 6.88199 2.438 8.33299 3.966C8.60299 4.25 8.82799 4.575 8.99899 4.928C10.073 2.716 13.001 2.008 15.006 3.766C15.541 4.235 15.935 4.867 16.116 5.556C16.479 6.939 16.082 8.294 15.2 9.222Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.2 9.222L9.71999 14.916C9.32699 15.325 8.67199 15.325 8.27899 14.916L2.79899 9.222C1.34699 7.694 1.40999 5.278 2.93799 3.827C4.46599 2.375 6.88199 2.438 8.33299 3.966C8.60299 4.25 8.82799 4.575 8.99899 4.928C10.073 2.716 13.001 2.008 15.006 3.766C15.541 4.235 15.935 4.867 16.116 5.556C16.479 6.939 16.082 8.294 15.2 9.222Z"
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

export default Heart2;
