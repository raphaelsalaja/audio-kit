import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective({
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
          d="M10.46 1.82699L15.67 4.23099C16.024 4.39399 16.251 4.74899 16.251 5.13899V12.859C16.251 13.249 16.024 13.604 15.67 13.767L10.46 16.171C10.129 16.324 9.75 16.082 9.75 15.717V2.28099C9.75 1.91599 10.128 1.67399 10.46 1.82699Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 12.25L2.408 12.531C2.084 12.639 1.75 12.398 1.75 12.057V5.94398C1.75 5.60298 2.084 5.36198 2.408 5.46998L3.25 5.75098"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 14.125L6.442 14.462C6.113 14.599 5.75 14.357 5.75 14V4.00001C5.75 3.64301 6.113 3.40101 6.442 3.53801L7.25 3.87501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.46 1.82699L15.67 4.23099C16.024 4.39399 16.251 4.74899 16.251 5.13899V12.859C16.251 13.249 16.024 13.604 15.67 13.767L10.46 16.171C10.129 16.324 9.75 16.082 9.75 15.717V2.28099C9.75 1.91599 10.128 1.67399 10.46 1.82699Z"
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

export default StackPerspective;
