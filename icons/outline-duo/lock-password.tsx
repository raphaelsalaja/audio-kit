import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockPassword({
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
          d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 6.75V4C5.75 2.205 7.205 0.75 9 0.75C10.795 0.75 12.25 2.205 12.25 4V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 6.75H4.75C4.19772 6.75 3.75 7.19772 3.75 7.75V12.25C3.75 12.8023 4.19772 13.25 4.75 13.25H13.25C13.8023 13.25 14.25 12.8023 14.25 12.25V7.75C14.25 7.19772 13.8023 6.75 13.25 6.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 18C2.94036 18 3.5 17.4404 3.5 16.75C3.5 16.0596 2.94036 15.5 2.25 15.5C1.55964 15.5 1 16.0596 1 16.75C1 17.4404 1.55964 18 2.25 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.75 18C7.44036 18 8 17.4404 8 16.75C8 16.0596 7.44036 15.5 6.75 15.5C6.05964 15.5 5.5 16.0596 5.5 16.75C5.5 17.4404 6.05964 18 6.75 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.25 18C11.9404 18 12.5 17.4404 12.5 16.75C12.5 16.0596 11.9404 15.5 11.25 15.5C10.5596 15.5 10 16.0596 10 16.75C10 17.4404 10.5596 18 11.25 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.75 18C16.4404 18 17 17.4404 17 16.75C17 16.0596 16.4404 15.5 15.75 15.5C15.0596 15.5 14.5 16.0596 14.5 16.75C14.5 17.4404 15.0596 18 15.75 18Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 9.5V10.5"
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

export default LockPassword;
