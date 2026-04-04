import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CameraSparkle({
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
          d="M9 11.75C10.519 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.519 6.25 9 6.25C7.481 6.25 6.25 7.4812 6.25 9C6.25 10.5188 7.481 11.75 9 11.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.7665 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V8.1877"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.589 2.3885L16.074 1.8825L15.569 0.3675C15.405 -0.1225 14.594 -0.1225 14.43 0.3675L13.925 1.8825L12.41 2.3885C12.165 2.4695 12 2.6995 12 2.9575C12 3.2155 12.165 3.4455 12.41 3.5265L13.925 4.0325L14.43 5.5475C14.512 5.7925 14.742 5.9575 15 5.9575C15.258 5.9575 15.487 5.7925 15.57 5.5475L16.075 4.0325L17.59 3.5265C17.835 3.4455 18 3.2155 18 2.9575C18 2.6995 17.834 2.4705 17.589 2.3885Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default CameraSparkle;
