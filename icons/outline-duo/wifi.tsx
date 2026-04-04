import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wifi({
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
          d="M9 14.75C9.82843 14.75 10.5 14.0784 10.5 13.25C10.5 12.4216 9.82843 11.75 9 11.75C8.17157 11.75 7.5 12.4216 7.5 13.25C7.5 14.0784 8.17157 14.75 9 14.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 14.75C9.82843 14.75 10.5 14.0784 10.5 13.25C10.5 12.4216 9.82843 11.75 9 11.75C8.17157 11.75 7.5 12.4216 7.5 13.25C7.5 14.0784 8.17157 14.75 9 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.11102 9.361C7.25902 7.213 10.741 7.213 12.889 9.361"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.28198 6.532C5.99198 2.822 12.007 2.822 15.717 6.532"
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

export default Wifi;
