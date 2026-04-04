import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sphere({
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
          d="M9 12.5C13.4183 12.5 17 10.933 17 9C17 7.067 13.4183 5.5 9 5.5C4.58172 5.5 1 7.067 1 9C1 10.933 4.58172 12.5 9 12.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 5.5C13.4183 5.5 17 7.0669 17 9C17 4.5889 13.4111 1 9 1C4.5889 1 1 4.5889 1 9C1 7.0669 4.5817 5.5 9 5.5Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M9 12C3.2084 12 1 9 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9C17 9 14.7917 12 9 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sphere;
