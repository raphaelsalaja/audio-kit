import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment3({
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
          d="M4.75 6.75C5.164 6.75 5.5 6.414 5.5 6C5.5 5.586 5.164 5.25 4.75 5.25C4.336 5.25 4 5.586 4 6C4 6.414 4.336 6.75 4.75 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.25 6.75C13.664 6.75 14 6.414 14 6C14 5.586 13.664 5.25 13.25 5.25C12.836 5.25 12.5 5.586 12.5 6C12.5 6.414 12.836 6.75 13.25 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16.75V10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 12.75H13C10.791 12.75 9 14.541 9 16.75H10.25C12.459 16.75 14.25 14.959 14.25 12.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.75C9.966 7.75 10.75 6.966 10.75 6C10.75 5.034 9.966 4.25 9 4.25C8.034 4.25 7.25 5.034 7.25 6C7.25 6.966 8.034 7.75 9 7.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 1.75H3.75C2.922 1.75 2.25 2.422 2.25 3.25V8.75C2.25 9.578 2.922 10.25 3.75 10.25H14.25C15.078 10.25 15.75 9.578 15.75 8.75V3.25C15.75 2.422 15.078 1.75 14.25 1.75Z"
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

export default Investment3;
