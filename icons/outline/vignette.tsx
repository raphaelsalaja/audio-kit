import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vignette({
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
          d="M3.75 15.25H14.25C15.355 15.25 16.25 14.355 16.25 13.25V4.75C16.25 3.645 15.355 2.75 14.25 2.75H3.75C2.645 2.75 1.75 3.645 1.75 4.75V13.25C1.75 14.355 2.645 15.25 3.75 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.25C11.3469 12.25 13.25 10.7949 13.25 9C13.25 7.2051 11.3469 5.75 9 5.75C6.6531 5.75 4.75 7.2051 4.75 9C4.75 10.7949 6.6531 12.25 9 12.25Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Vignette;
