import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gift2({
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
          d="M2.75 3.75V14.25C2.75 15.3546 3.64543 16.25 4.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V3.75C15.25 2.64543 14.3546 1.75 13.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75ZM7.25 4.75C6.284 4.75 5.5 5.533 5.5 6.5C5.5 7.467 6.284 8.25 7.25 8.25H9H10.75C11.716 8.25 12.5 7.467 12.5 6.5C12.5 5.533 11.716 4.75 10.75 4.75C9.784 4.75 9 5.533 9 6.5C9 5.533 8.216 4.75 7.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 8.25H15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25L12.24 11.49"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 4.75C6.284 4.75 5.5 5.533 5.5 6.5C5.5 7.467 6.284 8.25 7.25 8.25H9V6.5C9 5.533 8.216 4.75 7.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8.25L5.76 11.49"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 4.75C11.716 4.75 12.5 5.533 12.5 6.5C12.5 7.467 11.716 8.25 10.75 8.25H9V6.5C9 5.533 9.784 4.75 10.75 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 3.75L2.75 14.25C2.75 15.3546 3.64543 16.25 4.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V3.75C15.25 2.64543 14.3546 1.75 13.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75Z"
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

export default Gift2;
