import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleBarsFilter({
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
          d="M11.5001 10.25H6.50012C6.08602 10.25 5.75012 9.9141 5.75012 9.5C5.75012 9.0859 6.08602 8.75 6.50012 8.75H11.5001C11.9142 8.75 12.2501 9.0859 12.2501 9.5C12.2501 9.9141 11.9142 10.25 11.5001 10.25Z"
          fill={fill}
        />
        <path
          d="M10.2501 13H7.75012C7.33602 13 7.00012 12.6641 7.00012 12.25C7.00012 11.8359 7.33602 11.5 7.75012 11.5H10.2501C10.6642 11.5 11.0001 11.8359 11.0001 12.25C11.0001 12.6641 10.6642 13 10.2501 13Z"
          fill={fill}
        />
        <path
          d="M12.7501 7.5H5.25012C4.83602 7.5 4.50012 7.1641 4.50012 6.75C4.50012 6.3359 4.83602 6 5.25012 6H12.7501C13.1642 6 13.5001 6.3359 13.5001 6.75C13.5001 7.1641 13.1642 7.5 12.7501 7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleBarsFilter;
