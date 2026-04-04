import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggle3({
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
          d="M10.75 9C10.75 11.6234 8.62335 13.75 6 13.75H12C14.6234 13.75 16.75 11.6234 16.75 9C16.75 6.37665 14.6234 4.25 12 4.25H6C8.62335 4.25 10.75 6.37665 10.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6 13.75H12C14.623 13.75 16.75 11.623 16.75 9C16.75 6.377 14.623 4.25 12 4.25H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 13.75C8.62335 13.75 10.75 11.6234 10.75 9C10.75 6.37665 8.62335 4.25 6 4.25C3.37665 4.25 1.25 6.37665 1.25 9C1.25 11.6234 3.37665 13.75 6 13.75Z"
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

export default Toggle3;
