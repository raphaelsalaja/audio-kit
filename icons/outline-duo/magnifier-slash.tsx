import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierSlash({
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
          d="M13.25 7.75001C13.25 10.7875 10.7875 13.25 7.75001 13.25C7.0809 13.25 6.50367 13.1205 6.07703 12.6037L12.5928 6.12796C13.1418 6.51206 13.25 7.08578 13.25 7.75001Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 2.25C9.3326 2.25 10.7583 2.91927 11.7617 3.98926L3.89844 11.6738C2.88181 10.6758 2.25 9.28713 2.25 7.75C2.25 4.7125 4.7125 2.25 7.75 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 15.75L11.6386 11.6386"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.6391 3.8609C10.6438 2.8656 9.2688 2.25 7.75 2.25C4.7125 2.25 2.25 4.7125 2.25 7.75C2.25 9.2688 2.8656 10.6437 3.8609 11.6391"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.6106 13.1318C6.9782 13.2092 7.35939 13.25 7.74999 13.25C10.7875 13.25 13.25 10.7875 13.25 7.75C13.25 7.3703 13.2115 6.9996 13.1383 6.6416"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 13.25L13.25 2.25"
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

export default MagnifierSlash;
