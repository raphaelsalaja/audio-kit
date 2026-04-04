import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Atom({
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
          d="M8.99112 4.85504C7.67091 5.6275 5.69058 7.95075 4.86545 9.01581C5.45065 9.81754 7.09858 11.7616 9.00867 13.1239C10.7221 11.9442 12.4614 9.88191 13.1168 8.99826C12.4379 8.11461 10.6624 6.04885 8.99112 4.85504Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 13.145C8.263 12.594 7.514 11.946 6.784 11.216C3.557 7.98901 1.934 4.38201 3.158 3.15801C3.812 2.50401 5.148 2.66301 6.742 3.44601"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.85498C9.737 5.40598 10.486 6.05398 11.216 6.78398C14.443 10.011 16.066 13.618 14.842 14.842C14.188 15.496 12.852 15.337 11.258 14.554"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.855 8.99998C5.406 8.26298 6.054 7.51398 6.784 6.78398C10.011 3.55698 13.618 1.93398 14.842 3.15798C15.496 3.81198 15.337 5.14798 14.554 6.74198"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.145 9C12.594 9.737 11.946 10.486 11.216 11.216C7.98901 14.443 4.38201 16.066 3.15801 14.842C2.50401 14.188 2.66301 12.852 3.44601 11.258"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Atom;
