import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LaptopVideo({
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
          d="M17.619 1.28799C17.385 1.15499 17.094 1.15899 16.865 1.29899L14.743 2.571C14.593 2.661 14.5 2.824 14.5 3V4C14.5 4.176 14.592 4.339 14.743 4.429L16.864 5.69999C16.983 5.77199 17.117 5.808 17.251 5.808C17.378 5.808 17.505 5.776 17.619 5.711C17.854 5.578 18 5.328 18 5.058V1.94099C18 1.66999 17.854 1.41999 17.619 1.28799Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M0.75 14.75H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 2.75H4.25C3.145 2.75 2.25 3.645 2.25 4.75V12.75C2.25 13.855 3.145 14.75 4.25 14.75H13.75C14.855 14.75 15.75 13.855 15.75 12.75V8.3699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 0.75H10.5C9.5335 0.75 8.75 1.534 8.75 2.5V4.5C8.75 5.466 9.5335 6.25 10.5 6.25H13C13.9665 6.25 14.75 5.466 14.75 4.5V2.5C14.75 1.534 13.9665 0.75 13 0.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default LaptopVideo;
