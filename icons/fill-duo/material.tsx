import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Material({
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
          d="M15.159 3.901L3.901 15.159C4.631 15.764 5.473 16.235 6.386 16.553L16.553 6.387C16.236 5.473 15.765 4.631 15.159 3.901Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.613 1.447L1.44702 11.614C1.76402 12.527 2.23502 13.369 2.84002 14.099L14.099 2.841C13.369 2.236 12.526 1.765 11.613 1.447Z"
          fill={fill}
        />
        <path
          d="M9.887 1.052C9.595 1.02 9.3 1 9 1C4.589 1 1 4.589 1 9C1 9.3 1.02 9.596 1.052 9.888L9.887 1.052Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.11206 16.948C8.40406 16.98 8.69906 17 9.00006 17C13.4111 17 17.0001 13.411 17.0001 9C17.0001 8.7 16.9801 8.404 16.9481 8.113L8.11206 16.948Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Material;
