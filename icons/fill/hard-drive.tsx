import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HardDrive({
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
          d="M1.20393 9.70882L3.31906 3.82036C3.71135 2.72835 4.74685 2 5.90721 2H12.093C13.2534 2 14.2889 2.72833 14.6811 3.82034L16.7979 9.71328C16.9282 10.0332 17 10.3832 17 10.75V12.75C17 14.2688 15.7688 15.5 14.25 15.5H3.75C2.23119 15.5 1 14.2688 1 12.75V10.75C1 10.3815 1.07247 10.03 1.20393 9.70882ZM2.55038 10.3975L2.60028 10.2586C2.79117 9.81253 3.23407 9.5 3.75 9.5H14.25C14.7672 9.5 15.211 9.81406 15.4011 10.2619L15.4486 10.3941C15.4821 10.5069 15.5 10.6264 15.5 10.75V12.75C15.5 13.4404 14.9404 14 14.25 14H3.75C3.05961 14 2.5 13.4404 2.5 12.75V10.75C2.5 10.6276 2.51759 10.5093 2.55038 10.3975Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 11.75C4 11.3358 4.33579 11 4.75 11H7.5C7.91421 11 8.25 11.3358 8.25 11.75C8.25 12.1642 7.91421 12.5 7.5 12.5H4.75C4.33579 12.5 4 12.1642 4 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HardDrive;
