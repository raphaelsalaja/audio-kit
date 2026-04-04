import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair5({
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
          d="M12.75 10.25C12.25 7.312 12.321 4.673 12.321 4.673C12.281 4.152 11.846 3.75 11.324 3.75H6.67599C6.15299 3.75 5.71899 4.152 5.67899 4.673C5.67899 4.673 5.75 7.312 5.25 10.25H12.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.25V17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 10.25C12.25 7.312 12.321 4.673 12.321 4.673C12.281 4.152 11.846 3.75 11.324 3.75H6.67599C6.15299 3.75 5.71899 4.152 5.67899 4.673C5.67899 4.673 5.75 7.312 5.25 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 0.75H7.25C6.698 0.75 6.25 1.1977 6.25 1.75V2.75C6.25 3.3023 6.698 3.75 7.25 3.75H10.75C11.302 3.75 11.75 3.3023 11.75 2.75V1.75C11.75 1.1977 11.302 0.75 10.75 0.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 10.25H13.5C13.914 10.25 14.25 10.586 14.25 11V12.122C14.25 12.485 13.994 12.801 13.635 12.861C12.318 13.084 10.756 13.25 9 13.25C7.693 13.25 6.12501 13.158 4.37601 12.863C4.01601 12.802 3.75 12.484 3.75 12.119V11C3.75 10.586 4.086 10.25 4.5 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 7.75V9.25C2.25 10.0784 2.9216 10.75 3.75 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 7.75V9.25C15.75 10.0784 15.0784 10.75 14.25 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.5 17.25C5.5 16.4216 6.1716 15.75 7 15.75H11C11.8284 15.75 12.5 16.4216 12.5 17.25"
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

export default Chair5;
