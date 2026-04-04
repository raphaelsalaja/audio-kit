import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pencil({
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
          d="M13.953 7.57801L15.062 6.46901C15.648 5.88301 15.648 4.93301 15.062 4.34801L13.653 2.93901C13.067 2.35301 12.117 2.35301 11.532 2.93901L10.423 4.04801L13.953 7.57801Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.953 7.57801L15.062 6.46901C15.648 5.88301 15.648 4.93301 15.062 4.34801L13.653 2.93901C13.067 2.35301 12.117 2.35301 11.532 2.93901L10.423 4.04801L13.953 7.57801Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.6544 5.81464L4.147 10.322C3.897 10.572 3.718 10.884 3.627 11.226L2.5 15.499L6.773 14.372C7.115 14.282 7.427 14.102 7.677 13.852L12.1844 9.34463"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.4044 7.56464L6.26501 11.704"
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

export default Pencil;
