import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextUnderline({
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
          d="M5.25 2C5.66421 2 6 2.33579 6 2.75V8.5C6 10.1558 7.34336 11.5 9 11.5C10.6566 11.5 12 10.1558 12 8.5V2.75C12 2.33579 12.3358 2 12.75 2C13.1642 2 13.5 2.33579 13.5 2.75V8.5C13.5 10.984 11.4854 13 9 13C6.51464 13 4.5 10.984 4.5 8.5V2.75C4.5 2.33579 4.83579 2 5.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 15.25C2 14.8358 2.33579 14.5 2.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H2.75C2.33579 16 2 15.6642 2 15.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextUnderline;
