import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TruckHeart({
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
          d="M10.519 13.75H6.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 2.75C11.355 2.75 12.25 3.645 12.25 4.75V12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.76801 13.75H2.75C1.645 13.75 0.75 12.855 0.75 11.75V8.06461"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 5.75H14.454C14.794 5.75 15.111 5.92301 15.295 6.20901L17.091 9.00299C17.195 9.16399 17.25 9.35201 17.25 9.54401V11.75C17.25 12.855 16.355 13.75 15.25 13.75H14"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25H17.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.78104 6.44699C3.91904 6.51799 4.08003 6.51799 4.21803 6.44699C4.94703 6.07299 7.24903 4.717 7.24903 2.513C7.25303 1.545 6.45802 0.756 5.47202 0.75C4.87902 0.757 4.32803 1.051 3.99903 1.536C3.67003 1.052 3.11804 0.758 2.52604 0.75C1.54104 0.756 0.746032 1.544 0.749032 2.513C0.749032 4.718 3.05304 6.07299 3.78104 6.44699Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 15.75C5.466 15.75 6.25 14.966 6.25 14C6.25 13.034 5.466 12.25 4.5 12.25C3.534 12.25 2.75 13.034 2.75 14C2.75 14.966 3.534 15.75 4.5 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 15.75C13.216 15.75 14 14.966 14 14C14 13.034 13.216 12.25 12.25 12.25C11.284 12.25 10.5 13.034 10.5 14C10.5 14.966 11.284 15.75 12.25 15.75Z"
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

export default TruckHeart;
