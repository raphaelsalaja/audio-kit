import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Temperature({
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
          d="M4.75 10.306V4.25C4.75 2.869 5.869 1.75 7.25 1.75C8.631 1.75 9.75 2.869 9.75 4.25V10.306C10.367 10.937 10.75 11.798 10.75 12.75C10.75 14.683 9.183 16.25 7.25 16.25C5.317 16.25 3.75 14.683 3.75 12.75C3.75 11.798 4.133 10.937 4.75 10.306Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 14.25C8.078 14.25 8.75 13.578 8.75 12.75C8.75 11.922 8.078 11.25 7.25 11.25C6.422 11.25 5.75 11.922 5.75 12.75C5.75 13.578 6.422 14.25 7.25 14.25Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.5 3.25H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 6.25H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 9.25H12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 12V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.75 10.306V4.25C4.75 2.869 5.869 1.75 7.25 1.75C8.631 1.75 9.75 2.869 9.75 4.25V10.306C10.367 10.937 10.75 11.798 10.75 12.75C10.75 14.683 9.183 16.25 7.25 16.25C5.317 16.25 3.75 14.683 3.75 12.75C3.75 11.798 4.133 10.937 4.75 10.306Z"
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

export default Temperature;
