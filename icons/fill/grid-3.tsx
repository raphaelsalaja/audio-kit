import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid3({
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
          height="4"
          width="4"
          fill={secondaryfill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="7"
          y="2"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="2"
          y="2"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="12"
          y="2"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="7"
          y="7"
        />
        <rect
          height="4"
          width="4"
          fill={secondaryfill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="2"
          y="7"
        />
        <rect
          height="4"
          width="4"
          fill={secondaryfill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="12"
          y="7"
        />
        <rect
          height="4"
          width="4"
          fill={secondaryfill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="7"
          y="12"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="2"
          y="12"
        />
        <rect
          height="4"
          width="4"
          fill={fill}
          rx="1.5"
          ry="1.5"
          strokeWidth="0"
          x="12"
          y="12"
        />
      </g>
    </svg>
  );
}

export default Grid3;
