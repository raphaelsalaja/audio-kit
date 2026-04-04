import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserPanoramaView({
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
          d="M9 9.25C9.9665 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 9.9665 5.75 9 5.75C8.0335 5.75 7.25 6.5335 7.25 7.5C7.25 8.4665 8.0335 9.25 9 9.25Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.94672 15.801C5.48002 15.6608 5.16601 15.1995 5.27001 14.726C5.64511 13.0239 7.17221 11.75 9.00001 11.75C10.8278 11.75 12.3549 13.0239 12.73 14.726C12.834 15.1986 12.521 15.6609 12.0533 15.801C11.2697 16.0359 10.2293 16.25 9.00001 16.25C7.77071 16.25 6.73032 16.0369 5.94672 15.801Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 9.25C9.9665 9.25 10.75 8.4665 10.75 7.5C10.75 6.5335 9.9665 5.75 9 5.75C8.0335 5.75 7.25 6.5335 7.25 7.5C7.25 8.4665 8.0335 9.25 9 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.041 11.9492C15.44 11.8279 15.7501 11.4653 15.7501 11.0024V2.7568C15.7501 2.0693 15.0705 1.5893 14.4223 1.8193C10.8074 3.1015 7.1925 3.1015 3.5776 1.8198C2.9295 1.5901 2.25 2.0698 2.25 2.7575V11.0016C2.25 11.4647 2.5604 11.8275 2.9596 11.9489"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.94672 15.801C5.48002 15.6608 5.16601 15.1995 5.27001 14.726C5.64511 13.0239 7.17221 11.75 9.00001 11.75C10.8278 11.75 12.3549 13.0239 12.73 14.726C12.834 15.1986 12.521 15.6609 12.0533 15.801C11.2697 16.0359 10.2293 16.25 9.00001 16.25C7.77071 16.25 6.73032 16.0369 5.94672 15.801Z"
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

export default UserPanoramaView;
