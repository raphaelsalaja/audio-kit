import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePowerOff({
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
          d="M9.00011 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00011 1C4.58183 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58183 17 9.00011 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00012 14C6.24332 14 4.00012 11.7568 4.00012 8.99999C4.00012 7.42139 4.76873 5.91599 6.05673 4.97309C6.39173 4.72599 6.86043 4.80119 7.10553 5.13519C7.34963 5.46919 7.27742 5.9384 6.94342 6.1831C6.02642 6.855 5.50003 7.88129 5.50003 8.99999C5.50003 10.9297 7.07033 12.5 9.00003 12.5C10.9297 12.5 12.5 10.9297 12.5 8.99999C12.5 7.88129 11.9736 6.855 11.0566 6.1831C10.7226 5.9385 10.6504 5.46919 10.8945 5.13519C11.1386 4.80119 11.6064 4.72599 11.9433 4.97309C13.2314 5.91599 13.9999 7.42129 13.9999 8.99999C13.9999 11.7568 11.7569 14 9.00012 14Z"
          fill={fill}
        />
        <path
          d="M9.00012 9C8.58602 9 8.25012 8.6641 8.25012 8.25V4.25C8.25012 3.8359 8.58602 3.5 9.00012 3.5C9.41422 3.5 9.75012 3.8359 9.75012 4.25V8.25C9.75012 8.6641 9.41422 9 9.00012 9Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CirclePowerOff;
