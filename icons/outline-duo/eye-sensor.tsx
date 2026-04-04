import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeSensor({
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
          d="M15.282 10.424C15.953 11.184 15.953 12.317 15.282 13.077C14.181 14.324 12.12 16.001 9 16.001C5.88 16.001 3.819 14.324 2.718 13.077C2.047 12.317 2.047 11.184 2.718 10.424C3.819 9.177 5.88 7.5 9 7.5C12.12 7.5 14.181 9.177 15.282 10.424Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.282 10.424C15.953 11.184 15.953 12.317 15.282 13.077C14.181 14.324 12.12 16.001 9 16.001C5.88 16.001 3.819 14.324 2.718 13.077C2.047 12.317 2.047 11.184 2.718 10.424C3.819 9.177 5.88 7.5 9 7.5C12.12 7.5 14.181 9.177 15.282 10.424Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 13.25C9.82843 13.25 10.5 12.5784 10.5 11.75C10.5 10.9216 9.82843 10.25 9 10.25C8.17157 10.25 7.5 10.9216 7.5 11.75C7.5 12.5784 8.17157 13.25 9 13.25Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.757 2.50701C7.101 0.164006 10.899 0.164006 13.243 2.50701"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.879 4.629C8.051 3.457 9.95 3.457 11.122 4.629"
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

export default EyeSensor;
