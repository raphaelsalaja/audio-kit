import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copies4({
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
          d="M10.75 9.25H14.25C15.3546 9.25 16.25 8.35457 16.25 7.25V3.75C16.25 2.64543 15.3546 1.75 14.25 1.75L10.75 1.75C9.64543 1.75 8.75 2.64543 8.75 3.75V7.25C8.75 8.35457 9.64543 9.25 10.75 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.25 12.75V14.25C9.25 15.355 8.355 16.25 7.25 16.25H3.75C2.645 16.25 1.75 15.355 1.75 14.25V10.75C1.75 9.645 2.645 8.75 3.75 8.75H5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 9.25V10.75C12.75 11.855 11.855 12.75 10.75 12.75H7.25C6.145 12.75 5.25 11.855 5.25 10.75V7.25C5.25 6.145 6.145 5.25 7.25 5.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 9.25H14.25C15.3546 9.25 16.25 8.35457 16.25 7.25V3.75C16.25 2.64543 15.3546 1.75 14.25 1.75L10.75 1.75C9.64543 1.75 8.75 2.64543 8.75 3.75V7.25C8.75 8.35457 9.64543 9.25 10.75 9.25Z"
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

export default Copies4;
