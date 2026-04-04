import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link4({
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
          d="M5.25101 5.5V7.25V12.5C5.25101 14.5711 6.92991 16.25 9.00101 16.25C11.0721 16.25 12.751 14.5711 12.751 12.5V7.25V5.5C12.751 3.4289 11.0721 1.75 9.00101 1.75C6.92991 1.75 5.25101 3.4289 5.25101 5.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M5.25101 7.25V5.5C5.25101 3.4289 6.92991 1.75 9.00101 1.75C11.0721 1.75 12.751 3.4289 12.751 5.5V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25101 10.75V12.5C5.25101 14.5711 6.92991 16.25 9.00101 16.25C11.0721 16.25 12.751 14.5711 12.751 12.5V10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.00101 11.25V6.75"
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

export default Link4;
