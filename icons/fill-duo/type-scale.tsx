import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TypeScale({
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
          d="M1.75 2C1.33579 2 1 2.33579 1 2.75C1 3.16421 1.33579 3.5 1.75 3.5H6V15.25C6 15.6642 6.33579 16 6.75 16C7.16421 16 7.5 15.6642 7.5 15.25V3.5H11.75C12.1642 3.5 12.5 3.16421 12.5 2.75C12.5 2.33579 12.1642 2 11.75 2H6.75H1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.25 7C9.83579 7 9.5 7.33579 9.5 7.75C9.5 8.16421 9.83579 8.5 10.25 8.5H12.5V15.25C12.5 15.6642 12.8358 16 13.25 16C13.6642 16 14 15.6642 14 15.25V8.5H16.25C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7H13.25H10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TypeScale;
