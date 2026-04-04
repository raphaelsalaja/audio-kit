import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryCharging({
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
          d="M15 7.75C15 7.33579 15.3358 7 15.75 7H17.25C17.6642 7 18 7.33579 18 7.75V10.25C18 10.6642 17.6642 11 17.25 11H15.75C15.3358 11 15 10.6642 15 10.25V7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.418 8.41C12.29 8.159 12.032 8 11.75 8H9.75799L10.969 3.965C11.073 3.615 10.911 3.24 10.583 3.078C10.258 2.917 9.85899 3.012 9.64399 3.309L5.64399 8.809C5.47799 9.037 5.45499 9.339 5.58199 9.59C5.70899 9.841 5.96799 10 6.24999 10H8.24199L7.03099 14.035C6.92699 14.385 7.08899 14.76 7.41699 14.922C7.52299 14.975 7.63699 15 7.74999 15C7.98299 15 8.21099 14.891 8.35599 14.691L12.356 9.191C12.522 8.963 12.545 8.661 12.418 8.41Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 5C3.05921 5 2.5 5.55921 2.5 6.25V11.75C2.5 12.4408 3.05921 13 3.75 13H4.7921C5.20631 13 5.5421 13.3358 5.5421 13.75C5.5421 14.1642 5.20631 14.5 4.7921 14.5H3.75C2.23079 14.5 1 13.2692 1 11.75V6.25C1 4.73079 2.23079 3.5 3.75 3.5H6.1767C6.59091 3.5 6.9267 3.83579 6.9267 4.25C6.9267 4.66421 6.59091 5 6.1767 5H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.4579 4.25C12.4579 3.83579 12.7937 3.5 13.2079 3.5H13.75C15.2692 3.5 16.5 4.73079 16.5 6.25V11.75C16.5 13.2692 15.2692 14.5 13.75 14.5H11.8233C11.4091 14.5 11.0733 14.1642 11.0733 13.75C11.0733 13.3358 11.4091 13 11.8233 13H13.75C14.4408 13 15 12.4408 15 11.75V6.25C15 5.55921 14.4408 5 13.75 5H13.2079C12.7937 5 12.4579 4.66421 12.4579 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BatteryCharging;
