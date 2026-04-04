import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSizeIncrease({
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
          d="M2.5 2C2.08579 2 1.75 2.33579 1.75 2.75C1.75 3.16421 2.08579 3.5 2.5 3.5H7V15.25C7 15.6642 7.33579 16 7.75 16C8.16421 16 8.5 15.6642 8.5 15.25V3.5H13C13.4142 3.5 13.75 3.16421 13.75 2.75C13.75 2.33579 13.4142 2 13 2H2.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5 7.25C14.5 6.83579 14.1642 6.5 13.75 6.5C13.3358 6.5 13 6.83579 13 7.25V9H11.25C10.8358 9 10.5 9.33579 10.5 9.75C10.5 10.1642 10.8358 10.5 11.25 10.5H13V12.25C13 12.6642 13.3358 13 13.75 13C14.1642 13 14.5 12.6642 14.5 12.25V10.5H16.25C16.6642 10.5 17 10.1642 17 9.75C17 9.33579 16.6642 9 16.25 9H14.5V7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextSizeIncrease;
