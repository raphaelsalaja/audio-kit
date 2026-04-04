import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleLock({
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
          d="M1 9C1 4.58169 4.58169 1 9 1C13.4183 1 17 4.58169 17 9C17 13.4183 13.4183 17 9 17C4.58169 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.99999 5.51558C7.75726 5.51558 6.75061 6.52272 6.75061 7.76496C6.75061 8.7443 7.37626 9.57752 8.25 9.88633V12.5156C8.25 12.9298 8.58579 13.2656 9 13.2656C9.41421 13.2656 9.75 12.9298 9.75 12.5156V9.88632C10.6237 9.57751 11.2494 8.74429 11.2494 7.76496C11.2494 6.52272 10.2427 5.51558 8.99999 5.51558Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleLock;
