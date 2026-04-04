import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MinimizeWindow({
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
          d="M14.75 10.75H10.25C9.422 10.75 8.75 11.422 8.75 12.25V13.75C8.75 14.578 9.422 15.25 10.25 15.25H14.75C15.578 15.25 16.25 14.578 16.25 13.75V12.25C16.25 11.422 15.578 10.75 14.75 10.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.75 12.75H3.75C2.645 12.75 1.75 11.855 1.75 10.75V5.75C1.75 4.645 2.645 3.75 3.75 3.75H12.25C13.355 3.75 14.25 4.645 14.25 5.75V7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 10.75H10.25C9.422 10.75 8.75 11.422 8.75 12.25V13.75C8.75 14.578 9.422 15.25 10.25 15.25H14.75C15.578 15.25 16.25 14.578 16.25 13.75V12.25C16.25 11.422 15.578 10.75 14.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 6.25V9.25H4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 9.25L4.25 6.25"
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

export default MinimizeWindow;
