import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiamondTurnRight({
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
          d="M10.415 15.5853L15.5861 10.4142C16.3671 9.63316 16.3671 8.36684 15.5861 7.58579L10.415 2.41471C9.63394 1.63367 8.36761 1.63367 7.58656 2.41471L2.41549 7.58579C1.63444 8.36683 1.63444 9.63317 2.41549 10.4142L7.58656 15.5853C8.36761 16.3663 9.63394 16.3663 10.415 15.5853Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10 6.5L12.25 8.75L10 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 8.75H8.75C7.645 8.75 6.75 9.645 6.75 10.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.415 15.5853L15.5861 10.4142C16.3671 9.63316 16.3671 8.36684 15.5861 7.58579L10.415 2.41471C9.63394 1.63367 8.36761 1.63367 7.58656 2.41471L2.41549 7.58579C1.63444 8.36683 1.63444 9.63317 2.41549 10.4142L7.58656 15.5853C8.36761 16.3663 9.63394 16.3663 10.415 15.5853Z"
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

export default DiamondTurnRight;
