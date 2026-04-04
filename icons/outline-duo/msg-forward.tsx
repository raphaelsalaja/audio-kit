import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgForward({
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
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C13.004 16.25 16.25 13.004 16.25 9C16.25 4.996 13.004 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.25 9.25H2.878C2.262 9.25 1.769 9.806 1.889 10.41C2.047 11.199 2.333 11.942 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.494 16.282 9.376 16.296 10.285 16.138C13.187 15.634 15.555 13.332 16.112 10.439C17.003 5.803 13.475 1.75 9.001 1.75C5.781 1.75 3.053 3.847 2.106 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 6.5L10.5 9.25L7.75 12"
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

export default MsgForward;
