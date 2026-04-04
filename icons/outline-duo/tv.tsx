import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Tv({
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
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V10.25C1.75 11.3546 2.64543 12.25 3.75 12.25H14.25C15.3546 12.25 16.25 11.3546 16.25 10.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V10.25C1.75 11.3546 2.64543 12.25 3.75 12.25H14.25C15.3546 12.25 16.25 11.3546 16.25 10.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 15.5C12.326 15.163 10.85 14.75 9 14.75C7.15 14.75 5.674 15.163 4.75 15.5"
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

export default Tv;
