import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Versions2({
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
          d="M10.75 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75H10.75C9.64543 6.75 8.75 7.64543 8.75 8.75V14.25C8.75 15.3546 9.64543 16.25 10.75 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25 11.25H3.75C2.645 11.25 1.75 10.355 1.75 9.25V3.75C1.75 2.645 2.645 1.75 3.75 1.75H7.25C8.355 1.75 9.25 2.645 9.25 3.75V4.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 13.75H7.25C6.145 13.75 5.25 12.855 5.25 11.75V6.25C5.25 5.145 6.145 4.25 7.25 4.25H10.75C11.855 4.25 12.75 5.145 12.75 6.25V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 16.25H14.25C15.3546 16.25 16.25 15.3546 16.25 14.25V8.75C16.25 7.64543 15.3546 6.75 14.25 6.75H10.75C9.64543 6.75 8.75 7.64543 8.75 8.75V14.25C8.75 15.3546 9.64543 16.25 10.75 16.25Z"
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

export default Versions2;
