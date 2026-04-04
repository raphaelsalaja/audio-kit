import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Skateboarding({
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
        <circle
          cx="12.5"
          cy="2.75"
          fill="none"
          r="1.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="8.75"
          cy="16.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <circle
          cx="12.75"
          cy="16.75"
          fill={secondaryfill}
          r=".75"
          stroke="none"
        />
        <path
          d="M4.25,5.25h4.932c1.243,0,1.946,1.425,1.191,2.411l-1.703,2.223"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.899,11.23l-.388,.61c-.165,.259-.439,.428-.744,.458l-2.017,.202"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.119,5.25l-1.656,2.164c-.607,.793-.283,1.947,.648,2.309l2.002,.778c.384,.149,.638,.52,.638,.932v2.816"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.235,13.894c.183,.218,.458,.356,.765,.356h6.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Skateboarding;
