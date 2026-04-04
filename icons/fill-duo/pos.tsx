import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pos({
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
          d="M5.25 0C3.73079 0 2.5 1.23079 2.5 2.75V12.25C2.5 13.7692 3.73079 15 5.25 15H9V11H10.5V15H12.75C14.2692 15 15.5 13.7692 15.5 12.25V2.75C15.5 1.23079 14.2692 0 12.75 0H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.5 2.75C4.5 2.33579 4.83579 2 5.25 2H12.75C13.1642 2 13.5 2.33579 13.5 2.75V5.75C13.5 6.16421 13.1642 6.5 12.75 6.5H5.25C4.83579 6.5 4.5 6.16421 4.5 5.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 9.5C6.6642 9.5 7 9.164 7 8.75C7 8.336 6.6642 8 6.25 8C5.8358 8 5.5 8.336 5.5 8.75C5.5 9.164 5.8358 9.5 6.25 9.5Z"
          fill={fill}
        />
        <path
          d="M9 9.5C9.4142 9.5 9.75 9.164 9.75 8.75C9.75 8.336 9.4142 8 9 8C8.5858 8 8.25 8.336 8.25 8.75C8.25 9.164 8.5858 9.5 9 9.5Z"
          fill={fill}
        />
        <path
          d="M11.75 9.5C12.1642 9.5 12.5 9.164 12.5 8.75C12.5 8.336 12.1642 8 11.75 8C11.3358 8 11 8.336 11 8.75C11 9.164 11.3358 9.5 11.75 9.5Z"
          fill={fill}
        />
        <path
          d="M9 11H5.75C5.33579 11 5 11.3358 5 11.75V16.25C5 17.2162 5.78379 18 6.75 18H9V11Z"
          fill={fill}
        />
        <path
          d="M10.5 18H11.25C12.2162 18 13 17.2162 13 16.25V11.75C13 11.3358 12.6642 11 12.25 11H10.5V18Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pos;
