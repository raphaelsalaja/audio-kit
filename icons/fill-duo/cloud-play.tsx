import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudPlay({
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
          d="M3.75 7.25C3.75 4.35079 6.10079 2 9 2C11.5876 2 13.7108 3.87504 14.1468 6.32735C15.8113 6.9824 17 8.59291 17 10.5C17 12.9852 14.9852 15 12.5 15H4.75C2.67879 15 1 13.3212 1 11.25C1 9.51787 2.17545 8.07117 3.7666 7.64076C3.75589 7.51318 3.75 7.38292 3.75 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.3364 8.59427L8.35584 6.85498C7.83541 6.55108 7.17291 6.91526 7.17291 7.50549V9.24541V10.9853C7.17291 11.5756 7.83541 11.9397 8.35584 11.6358L11.3364 9.89653C11.8413 9.60142 11.8413 8.88938 11.3364 8.59427Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudPlay;
