import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notepad({
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
          d="M4.75 2C3.23128 2 2 3.23069 2 4.75V14.25C2 15.7693 3.23128 17 4.75 17H13.25C14.7687 17 16 15.7693 16 14.25V4.75C16 3.23069 14.7687 2 13.25 2H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 0.5C9.41421 0.5 9.75 0.835786 9.75 1.25V3.25C9.75 3.66421 9.41421 4 9 4C8.58579 4 8.25 3.66421 8.25 3.25V1.25C8.25 0.835786 8.58579 0.5 9 0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.75 0.5C6.16421 0.5 6.5 0.835786 6.5 1.25V3.25C6.5 3.66421 6.16421 4 5.75 4C5.33579 4 5 3.66421 5 3.25V1.25C5 0.835786 5.33579 0.5 5.75 0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 0.5C12.6642 0.5 13 0.835786 13 1.25V3.25C13 3.66421 12.6642 4 12.25 4C11.8358 4 11.5 3.66421 11.5 3.25V1.25C11.5 0.835786 11.8358 0.5 12.25 0.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 6.75C5.5 6.33579 5.83579 6 6.25 6H11.75C12.1642 6 12.5 6.33579 12.5 6.75V10.25C12.5 10.6642 12.1642 11 11.75 11H6.25C5.83579 11 5.5 10.6642 5.5 10.25V6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Notepad;
