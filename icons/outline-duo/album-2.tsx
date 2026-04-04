import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Album2({
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
          d="M3.06602 7.25H14.934C15.595 7.25 16.075 7.88 15.898 8.518L13.954 15.518C13.834 15.951 13.44 16.25 12.99 16.25H5.01002C4.56102 16.25 4.16702 15.95 4.04602 15.518L2.10202 8.518C1.92502 7.881 2.40402 7.25 3.06602 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 1.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 4.25H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.06602 7.25H14.934C15.595 7.25 16.075 7.88 15.898 8.518L13.954 15.518C13.834 15.951 13.44 16.25 12.99 16.25H5.01002C4.56102 16.25 4.16702 15.95 4.04602 15.518L2.10202 8.518C1.92502 7.881 2.40402 7.25 3.06602 7.25Z"
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

export default Album2;
