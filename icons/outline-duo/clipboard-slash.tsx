import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardSlash({
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
          d="M14.573 3.927C14.26 3.233 13.561 2.75 12.75 2.75H11.75V3.25C11.75 3.802 11.302 4.25 10.75 4.25H7.25C6.698 4.25 6.25 3.802 6.25 3.25V2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 14.544 3.313 14.822 3.427 15.073L14.573 3.927ZM6.38429 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V7.7059L14.241 7.44099L5.9547 15.7273L6.38429 16.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.573 3.927C14.259 3.233 13.561 2.75 12.75 2.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 14.543 3.313 14.822 3.427 15.073"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 1.25H7.25C6.698 1.25 6.25 1.698 6.25 2.25V3.25C6.25 3.802 6.698 4.25 7.25 4.25H10.75C11.302 4.25 11.75 3.802 11.75 3.25V2.25C11.75 1.698 11.302 1.25 10.75 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 16.25L16 2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.49219 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V7.99219"
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

export default ClipboardSlash;
