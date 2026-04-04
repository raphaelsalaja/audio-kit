import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cloud({
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
          d="M13.464 6.891C13.278 4.577 11.362 2.75 9 2.75C6.515 2.75 4.5 4.765 4.5 7.25C4.5 7.6 4.549 7.936 4.624 8.263C3.027 8.33 1.75 9.637 1.75 11.25C1.75 12.907 3.093 14.25 4.75 14.25H12.5C14.571 14.25 16.25 12.571 16.25 10.5C16.25 8.764 15.065 7.318 13.464 6.891Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.464 6.891C13.278 4.577 11.362 2.75 9 2.75C6.515 2.75 4.5 4.765 4.5 7.25C4.5 7.6 4.549 7.936 4.624 8.263C3.027 8.33 1.75 9.637 1.75 11.25C1.75 12.907 3.093 14.25 4.75 14.25H12.5C14.571 14.25 16.25 12.571 16.25 10.5C16.25 8.764 15.065 7.318 13.464 6.891Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.705 8C10.392 7.233 11.389 6.75 12.5 6.75C12.833 6.75 13.157 6.809 13.464 6.891"
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

export default Cloud;
