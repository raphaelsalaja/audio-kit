import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabClose({
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
          d="M13.75 15.75H4.25C3.836 15.75 3.5 15.41 3.5 15V11.25C3.5 10.01 4.509 9 5.75 9H12.25C13.491 9 14.5 10.01 14.5 11.25V15C14.5 15.41 14.164 15.75 13.75 15.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.75 17H2.25C1.836 17 1.5 16.66 1.5 16.25V14.75C1.5 13.23 2.733 12 4.25 12H13.75C15.267 12 16.5 13.23 16.5 14.75V16.25C16.5 16.66 16.164 17 15.75 17Z"
          fill={fill}
        />
        <path
          d="M10.97 4.21997L9.74999 5.43994V1.75012C9.74999 1.34012 9.41399 1.00012 8.99999 1.00012C8.58599 1.00012 8.24999 1.34012 8.24999 1.75012V5.43994L7.02999 4.21997C6.73699 3.93007 6.26299 3.93007 5.96999 4.21997C5.67699 4.50997 5.67699 4.99005 5.96999 5.28015L8.46999 7.78015C8.61599 7.93015 8.80799 8.00012 8.99999 8.00012C9.19199 8.00012 9.38399 7.93025 9.52999 7.78015L12.03 5.28015C12.323 4.99015 12.323 4.51007 12.03 4.21997C11.737 3.93007 11.263 3.93007 10.97 4.21997Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TabClose;
