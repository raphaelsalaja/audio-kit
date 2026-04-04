import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewAll({
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
        <rect
          height="7"
          width="8.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="1"
          y="2"
        />
        <rect
          height="10"
          width="5.5"
          fill={secondaryfill}
          rx="1.75"
          ry="1.75"
          x="11.5"
          y="4"
        />
        <rect
          height="5.5"
          width="7"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="3"
          y="10.5"
        />
      </g>
    </svg>
  );
}

export default ViewAll;
