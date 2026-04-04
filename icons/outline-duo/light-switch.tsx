import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LightSwitch({
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
          d="M5.74997 8.75L4.85097 14.168C4.79997 14.473 5.03497 14.75 5.34397 14.75H12.656C12.965 14.75 13.2 14.473 13.149 14.168L12.25 8.75H5.74997Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 8.75H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.144 14.36L12.855 15.496C12.742 15.939 12.343 16.25 11.886 16.25H9.00002H6.11402C5.65702 16.25 5.25802 15.94 5.14502 15.496L4.85602 14.36"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.24997 1.75H11.75C12.026 1.75 12.25 1.974 12.25 2.25V8.75L13.149 14.168C13.2 14.473 12.965 14.75 12.656 14.75H5.34397C5.03497 14.75 4.79997 14.473 4.85097 14.168L5.74997 8.75V2.25C5.74997 1.974 5.97397 1.75 6.24997 1.75Z"
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

export default LightSwitch;
