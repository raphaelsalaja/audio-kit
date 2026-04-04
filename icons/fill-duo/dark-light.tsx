import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DarkLight({
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
          d="M5 9C5 6.7909 6.79084 5 9 5V13C6.79084 13 5 11.2091 5 9Z"
          fill={fill}
        />
        <path
          d="M1 9C1 4.58179 4.58168 1 9 1V5C6.79084 5 5 6.7909 5 9C5 11.2091 6.79084 13 9 13V17C4.58168 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13 9C13 6.7909 11.2092 5 9 5V13C11.2092 13 13 11.2091 13 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17 9C17 4.58179 13.4183 1 9 1V5C11.2092 5 13 6.7909 13 9C13 11.2091 11.2092 13 9 13V17C13.4183 17 17 13.4182 17 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DarkLight;
