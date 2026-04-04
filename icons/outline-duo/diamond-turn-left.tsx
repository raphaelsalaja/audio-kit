import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiamondTurnLeft({
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
          d="M15.5853 7.585L10.4142 2.41392C9.63316 1.63288 8.36684 1.63288 7.58579 2.41392L2.41471 7.585C1.63367 8.36604 1.63367 9.63237 2.41471 10.4134L7.58579 15.5845C8.36683 16.3655 9.63317 16.3655 10.4142 15.5845L15.5853 10.4134C16.3663 9.63237 16.3663 8.36604 15.5853 7.585Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8 6.5L5.75 8.75L8 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 8.75H9.25C10.355 8.75 11.25 9.645 11.25 10.75V11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5853 7.585L10.4142 2.41392C9.63316 1.63288 8.36684 1.63288 7.58579 2.41392L2.41471 7.585C1.63367 8.36604 1.63367 9.63237 2.41471 10.4134L7.58579 15.5845C8.36683 16.3655 9.63317 16.3655 10.4142 15.5845L15.5853 10.4134C16.3663 9.63237 16.3663 8.36604 15.5853 7.585Z"
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

export default DiamondTurnLeft;
