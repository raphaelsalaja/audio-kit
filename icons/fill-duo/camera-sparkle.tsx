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
          d="M10.7309 2H4.75C3.23119 2 2 3.23119 2 4.75V13.25C2 14.7688 3.23119 16 4.75 16H13.25C14.7688 16 16 14.7688 16 13.25V7.20419C15.7002 7.36669 15.3585 7.4575 15 7.4575C14.0988 7.4575 13.2948 6.88187 13.0076 6.02358L13.007 6.02184L12.739 5.21783L11.9391 4.95068L11.9362 4.94972C11.074 4.66326 10.5 3.85665 10.5 2.9575C10.5 2.61738 10.5821 2.29049 10.7309 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.5 9C5.5 7.06699 7.06699 5.5 9 5.5C10.933 5.5 12.5 7.06699 12.5 9C12.5 10.933 10.933 12.5 9 12.5C7.06699 12.5 5.5 10.933 5.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.589 2.3885L16.074 1.8825L15.569 0.3675C15.405 -0.1225 14.594 -0.1225 14.43 0.3675L13.925 1.8825L12.41 2.3885C12.165 2.4695 12 2.6995 12 2.9575C12 3.2155 12.165 3.4455 12.41 3.5265L13.925 4.0325L14.43 5.5475C14.512 5.7925 14.742 5.9575 15 5.9575C15.258 5.9575 15.487 5.7925 15.57 5.5475L16.075 4.0325L17.59 3.5265C17.835 3.4455 18 3.2155 18 2.9575C18 2.6995 17.834 2.4705 17.589 2.3885Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CameraSparkle;
