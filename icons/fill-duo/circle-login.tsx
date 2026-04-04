import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleLogin({
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
          d="M9.75 2.75C6.3039 2.75 3.5 5.5539 3.5 9C3.5 12.4461 6.3039 15.25 9.75 15.25C13.1961 15.25 16 12.4461 16 9C16 5.5539 13.1961 2.75 9.75 2.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.2803 5.96975C8.9873 5.67675 8.5127 5.67675 8.2198 5.96975C7.9269 6.26275 7.9268 6.73734 8.2198 7.03024L9.4395 8.2499H0.75C0.3359 8.2499 0 8.5858 0 8.9999C0 9.414 0.3359 9.7499 0.75 9.7499H9.4395L8.2198 10.9696C7.9268 11.2626 7.9268 11.7372 8.2198 12.0301C8.3663 12.1766 8.55771 12.2498 8.75011 12.2498C8.94251 12.2498 9.1339 12.1766 9.2804 12.0301L11.7804 9.53011C12.0734 9.23711 12.0734 8.76253 11.7804 8.46963L9.2803 5.96975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleLogin;
