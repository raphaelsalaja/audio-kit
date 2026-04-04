import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StrokeButCap({
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
          d="M1 3.75C1 3.33579 1.33579 3 1.75 3H13.25C14.2172 3 15 3.78676 15 4.75V13.25C15 14.2132 14.2172 15 13.25 15H1.75C1.33579 15 1 14.6642 1 14.25V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.3447 9.75H1V8.25H11.3447C11.6779 6.95788 12.8517 6 14.25 6C15.9079 6 17.25 7.34644 17.25 9C17.25 10.6536 15.9079 12 14.25 12C12.8517 12 11.6779 11.0421 11.3447 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default StrokeButCap;
