import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eye2Slash({
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
          d="M9 11.75C10.5188 11.75 11.75 10.519 11.75 9C11.75 7.481 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.481 6.25 9C6.25 10.519 7.4812 11.75 9 11.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M1.75 9C1.75 9 3.521 3.5 9 3.5C14.479 3.5 16.25 9 16.25 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.9446 7.05551C9.87046 5.98141 8.12955 5.98141 7.05545 7.05551C5.98135 8.12961 5.98135 9.87051 7.05545 10.9446C8.12955 12.0187 9.87046 12.0187 10.9446 10.9446"
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

export default Eye2Slash;
