import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notebook({
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
          d="M5.25 1C3.73128 1 2.5 2.23069 2.5 3.75V14.25C2.5 15.7693 3.73128 17 5.25 17H12.75C14.2687 17 15.5 15.7693 15.5 14.25V3.75C15.5 2.23069 14.2687 1 12.75 1H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.25 4C17.6642 4 18 4.33579 18 4.75V7.25C18 7.66421 17.6642 8 17.25 8C16.8358 8 16.5 7.66421 16.5 7.25V4.75C16.5 4.33579 16.8358 4 17.25 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H3.25C3.66421 8.25 4 8.58579 4 9C4 9.41421 3.66421 9.75 3.25 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 5.75C1 5.33579 1.33579 5 1.75 5H3.25C3.66421 5 4 5.33579 4 5.75C4 6.16421 3.66421 6.5 3.25 6.5H1.75C1.33579 6.5 1 6.16421 1 5.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5L3.25 11.5C3.66421 11.5 4 11.8358 4 12.25C4 12.6642 3.66421 13 3.25 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.25 17H6V1H5.25C3.73128 1 2.5 2.23069 2.5 3.75V14.25C2.5 15.7693 3.73128 17 5.25 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Notebook;
