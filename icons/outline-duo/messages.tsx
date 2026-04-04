import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Messages({
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
          d="M9.25 6.25H14.75C15.578 6.25 16.25 6.922 16.25 7.75V12.25C16.25 13.078 15.578 13.75 14.75 13.75H14.25V16.25L11.5 13.75H9.25C8.422 13.75 7.75 13.078 7.75 12.25V7.75C7.75 6.922 8.422 6.25 9.25 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 6.25H14.75C15.578 6.25 16.25 6.922 16.25 7.75V12.25C16.25 13.078 15.578 13.75 14.75 13.75H14.25V16.25L11.5 13.75H9.25C8.422 13.75 7.75 13.078 7.75 12.25V7.75C7.75 6.922 8.422 6.25 9.25 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7254 3.25C11.3791 2.6543 10.7389 2.25 10 2.25H3.75C2.645 2.25 1.75 3.145 1.75 4.25V9.25101C1.75 10.355 2.646 11.251 3.75 11.25V14.25L4.8328 13.0691"
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

export default Messages;
