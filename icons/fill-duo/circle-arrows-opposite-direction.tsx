import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleArrowsOppositeDirection({
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
          d="M9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25 13C5.8359 13 5.5 12.6641 5.5 12.25V1C5.5 0.5859 5.8359 0.25 6.25 0.25C6.6641 0.25 7 0.5859 7 1V12.25C7 12.6641 6.6641 13 6.25 13Z"
          fill={fill}
        />
        <path
          d="M6.25 13.25C6.0581 13.25 5.8662 13.1768 5.7197 13.0303L3.7197 11.0303C3.4267 10.7373 3.4267 10.2627 3.7197 9.96981C4.0127 9.67691 4.4873 9.67681 4.7802 9.96981L6.2499 11.4395L7.7196 9.96981C8.0126 9.67681 8.4872 9.67681 8.7801 9.96981C9.073 10.2628 9.0731 10.7374 8.7801 11.0303L6.7801 13.0303C6.6336 13.1768 6.4419 13.25 6.25 13.25Z"
          fill={fill}
        />
        <path
          d="M11.75 17.75C11.3359 17.75 11 17.4141 11 17V5.75C11 5.3359 11.3359 5 11.75 5C12.1641 5 12.5 5.3359 12.5 5.75V17C12.5 17.4141 12.1641 17.75 11.75 17.75Z"
          fill={fill}
        />
        <path
          d="M13.75 8.25002C13.5581 8.25002 13.3662 8.1768 13.2197 8.0303L11.75 6.56063L10.2803 8.0303C9.9873 8.3233 9.5127 8.3233 9.2198 8.0303C8.9269 7.7373 8.9268 7.26271 9.2198 6.96981L11.2198 4.96981C11.5128 4.67681 11.9874 4.67681 12.2803 4.96981L14.2803 6.96981C14.5733 7.26281 14.5733 7.7374 14.2803 8.0303C14.1338 8.1768 13.9419 8.25002 13.75 8.25002Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleArrowsOppositeDirection;
