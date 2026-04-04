import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHalf({
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
          d="M9 4.46999C8.29 3.41 7.103 2.766 5.827 2.75C3.704 2.763 1.993 4.489 2.001 6.609C2.001 11.435 6.959 14.403 8.52901 15.222C8.67766 15.2996 8.83884 15.3383 9 15.3383V4.46999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 4.47C9.71 3.409 10.896 2.766 12.173 2.75C14.296 2.763 16.007 4.489 16 6.609C16 11.435 11.041 14.403 9.471 15.222C9.322 15.3 9.161 15.338 9 15.338"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99999 4.47C8.28999 3.409 7.10399 2.766 5.82699 2.75C3.70399 2.763 1.99299 4.489 1.99999 6.609C1.99999 11.435 6.95899 14.403 8.52899 15.222C8.67799 15.3 8.83899 15.338 8.99999 15.338V4.47Z"
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

export default HeartHalf;
