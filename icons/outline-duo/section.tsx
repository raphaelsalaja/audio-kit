import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Section({
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
          d="M1.75 7.75V10.25C1.75 11.3546 2.64543 12.25 3.75 12.25H14.25C15.3546 12.25 16.25 11.3546 16.25 10.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75L3.75 5.75C2.64543 5.75 1.75 6.64543 1.75 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 7.75V10.25C1.75 11.3546 2.64543 12.25 3.75 12.25H14.25C15.3546 12.25 16.25 11.3546 16.25 10.25V7.75C16.25 6.64543 15.3546 5.75 14.25 5.75L3.75 5.75C2.64543 5.75 1.75 6.64543 1.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 15.75H14.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 2.25H14.25"
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

export default Section;
