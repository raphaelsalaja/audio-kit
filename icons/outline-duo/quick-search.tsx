import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function QuickSearch({
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
          d="M5.02539 6.32811C4.63105 5.60571 4.66304 4.72608 5.10742 4.03417L5.44113 3.5147L5.02539 2.9711C3.36745 3.91845 2.25 5.70379 2.25 7.74999C2.25 10.7875 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7875 13.25 7.74999L12.5524 6.49602L10.6426 9.46678C10.0737 10.3513 8.97349 10.7185 7.99707 10.3711L7.80371 10.292C6.78185 9.81838 6.27115 8.66359 6.59863 7.59178L6.63574 7.46874C6.00824 7.36578 5.44893 7.00211 5.10352 6.46092L5.02539 6.32811Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.8121 3.10599C3.274 4.08109 2.25 5.79419 2.25 7.74999C2.25 10.7876 4.7125 13.25 7.75 13.25C10.7875 13.25 13.25 10.7876 13.25 7.74999C13.25 7.46289 13.2213 7.18309 13.1789 6.90799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.66701 5.25H7L9.25 1.75L8.33299 4.75H11L8.75 8.25L9.66701 5.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default QuickSearch;
