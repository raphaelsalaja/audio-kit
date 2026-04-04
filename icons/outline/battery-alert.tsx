import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryAlert({
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
          d="M17.25 7.75H15.75V10.25H17.25V7.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 15.25H11.683C12.4711 15.25 12.9495 14.3808 12.5278 13.7149L9.59484 9.0839C9.20224 8.464 8.29783 8.464 7.90523 9.0839L4.97223 13.7149C4.55053 14.3807 5.02894 15.25 5.81704 15.25H6.25003"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 11.75V13.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.5C9.16421 16.5 9.5 16.1642 9.5 15.75C9.5 15.3358 9.16421 15 8.75 15C8.33579 15 8 15.3358 8 15.75C8 16.1642 8.33579 16.5 8.75 16.5Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M15.4134 12.8308C15.6199 12.5188 15.75 12.1526 15.75 11.75V6.25C15.75 5.146 14.855 4.25 13.75 4.25H3.75C2.645 4.25 1.75 5.146 1.75 6.25V11.75C1.75 12.1526 1.8801 12.5188 2.0866 12.8308"
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

export default BatteryAlert;
