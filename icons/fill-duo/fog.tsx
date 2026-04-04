import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fog({
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
          d="M1 7.75C1 7.33579 1.33579 7 1.75 7H9.25C9.66421 7 10 7.33579 10 7.75C10 8.16421 9.66421 8.5 9.25 8.5H1.75C1.33579 8.5 1 8.16421 1 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 4.75C4 4.33579 4.33579 4 4.75 4H13.25C13.6642 4 14 4.33579 14 4.75C14 5.16421 13.6642 5.5 13.25 5.5H4.75C4.33579 5.5 4 5.16421 4 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6 13.75C6 13.3358 6.33579 13 6.75 13H11.25C11.6642 13 12 13.3358 12 13.75C12 14.1642 11.6642 14.5 11.25 14.5H6.75C6.33579 14.5 6 14.1642 6 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 10.75C9 10.3358 9.33579 10 9.75 10H16.25C16.6642 10 17 10.3358 17 10.75C17 11.1642 16.6642 11.5 16.25 11.5H9.75C9.33579 11.5 9 11.1642 9 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.5 7.75C11.5 7.33579 11.8358 7 12.25 7H14.25C14.6642 7 15 7.33579 15 7.75C15 8.16421 14.6642 8.5 14.25 8.5H12.25C11.8358 8.5 11.5 8.16421 11.5 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 10.75C4 10.3358 4.33579 10 4.75 10H6.75C7.16421 10 7.5 10.3358 7.5 10.75C7.5 11.1642 7.16421 11.5 6.75 11.5H4.75C4.33579 11.5 4 11.1642 4 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Fog;
