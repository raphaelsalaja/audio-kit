import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleMinus({
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
          d="M9.00012 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00012 1C4.58184 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58184 17 9.00012 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.2501 9.75H5.75012C5.33602 9.75 5.00012 9.4141 5.00012 9C5.00012 8.5859 5.33602 8.25 5.75012 8.25H12.2501C12.6642 8.25 13.0001 8.5859 13.0001 9C13.0001 9.4141 12.6642 9.75 12.2501 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleMinus;
