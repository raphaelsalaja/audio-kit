import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudStreaming({
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
          d="M13.75 5.25C13.554 5.25 13.365 5.278 13.182 5.321C12.855 3.299 11.115 1.75 9 1.75C6.885 1.75 5.145 3.299 4.818 5.321C4.635 5.278 4.446 5.25 4.25 5.25C2.869 5.25 1.75 6.369 1.75 7.75C1.75 9.131 2.869 10.25 4.25 10.25H13.75C15.131 10.25 16.25 9.131 16.25 7.75C16.25 6.369 15.131 5.25 13.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.704 6.04201L8.396 4.69601C7.999 4.46401 7.5 4.75101 7.5 5.21101V7.90401C7.5 8.36401 7.999 8.65101 8.396 8.41901L10.704 7.07301C11.098 6.84301 11.098 6.27301 10.704 6.04301V6.04201Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 14.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 5.25C13.554 5.25 13.365 5.278 13.182 5.321C12.855 3.299 11.115 1.75 9 1.75C6.885 1.75 5.145 3.299 4.818 5.321C4.635 5.278 4.446 5.25 4.25 5.25C2.869 5.25 1.75 6.369 1.75 7.75C1.75 9.131 2.869 10.25 4.25 10.25H13.75C15.131 10.25 16.25 9.131 16.25 7.75C16.25 6.369 15.131 5.25 13.75 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16V12.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 14.25H16.25"
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

export default CloudStreaming;
