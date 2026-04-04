import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sack({
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
          d="M6.25 0.5C5.28379 0.5 4.5 1.28379 4.5 2.25C4.5 2.39807 4.54383 2.54282 4.62596 2.66603L6.62596 5.66603H11.374L13.374 2.66603C13.4562 2.54282 13.5 2.39807 13.5 2.25C13.5 1.28379 12.7162 0.5 11.75 0.5H6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.89581 4.58893C5.54962 5.31016 4.39558 6.55337 3.58035 7.95258C2.76459 9.35267 2.25 10.974 2.25 12.5C2.25 14.4038 3.04591 15.7195 4.37277 16.5117C5.6338 17.2646 7.29875 17.5 9 17.5C10.7013 17.5 12.3662 17.2646 13.6272 16.5117C14.9541 15.7195 15.75 14.4038 15.75 12.5C15.75 10.974 15.2354 9.35267 14.4197 7.95258C13.6044 6.55337 12.4504 5.31016 11.1042 4.58893H6.89581Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V4.5H6.74902C6.33481 4.5 5.99902 4.83579 5.99902 5.25C5.99902 5.66421 6.33481 6 6.74902 6H11.2512C11.6654 6 12.0012 5.66421 12.0012 5.25C12.0012 4.83579 11.6654 4.5 11.2512 4.5H9.75V3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sack;
