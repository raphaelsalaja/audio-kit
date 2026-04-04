import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Download3({
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
          d="M2.25 9C2.25 7.89543 3.14543 7 4.25 7H13.75C14.8546 7 15.75 7.89543 15.75 9V13.75C15.75 14.8546 14.8546 15.75 13.75 15.75H4.25C3.14543 15.75 2.25 14.8546 2.25 13.75V9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 6.75H13.75C14.855 6.75 15.75 7.645 15.75 8.75V13.75C15.75 14.855 14.855 15.75 13.75 15.75H4.25C3.145 15.75 2.25 14.855 2.25 13.75V8.75C2.25 7.645 3.145 6.75 4.25 6.75H6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 9.75L9 12.75L6 9.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 12.75V1.25"
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

export default Download3;
