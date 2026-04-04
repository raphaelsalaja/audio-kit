import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Raindrops({
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
          d="M9 15.25C10.795 15.25 12.25 13.717 12.25 11.825C12.25 9.224 10.428 8.112 9 6.25C7.572 8.112 5.75 9.224 5.75 11.825C5.75 13.716 7.205 15.25 9 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.5 7.25C4.466 7.25 5.25 6.483 5.25 5.538C5.25 4.237 4.269 3.681 3.5 2.75C2.731 3.681 1.75 4.237 1.75 5.538C1.75 6.484 2.534 7.25 3.5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 7.25C13.534 7.25 12.75 6.483 12.75 5.538C12.75 4.237 13.731 3.681 14.5 2.75C15.269 3.681 16.25 4.237 16.25 5.538C16.25 6.484 15.466 7.25 14.5 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15.25C10.795 15.25 12.25 13.717 12.25 11.825C12.25 9.224 10.428 8.112 9 6.25C7.572 8.112 5.75 9.224 5.75 11.825C5.75 13.716 7.205 15.25 9 15.25Z"
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

export default Raindrops;
