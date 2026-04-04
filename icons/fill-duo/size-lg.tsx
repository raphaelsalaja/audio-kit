import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SizeLg({
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
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H6.25C6.66421 14.5 7 14.8358 7 15.25C7 15.6642 6.66421 16 6.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 12.25C2 11.8358 2.33579 11.5 2.75 11.5H4.25C4.66421 11.5 5 11.8358 5 12.25C5 12.6642 4.66421 13 4.25 13H2.75C2.33579 13 2 12.6642 2 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 9C2 8.58579 2.33579 8.25 2.75 8.25H6.25C6.66421 8.25 7 8.58579 7 9C7 9.41421 6.66421 9.75 6.25 9.75H2.75C2.33579 9.75 2 9.41421 2 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 5.75C2 5.33579 2.33579 5 2.75 5H4.25C4.66421 5 5 5.33579 5 5.75C5 6.16421 4.66421 6.5 4.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 2.75C2 2.33579 2.33579 2 2.75 2H6.25C6.66421 2 7 2.33579 7 2.75C7 3.16421 6.66421 3.5 6.25 3.5H2.75C2.33579 3.5 2 3.16421 2 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 3.75C9 2.78379 9.78379 2 10.75 2H14.25C15.2162 2 16 2.78379 16 3.75V14.25C16 15.2162 15.2162 16 14.25 16H10.75C9.78379 16 9 15.2162 9 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SizeLg;
