import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersPin({
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
          d="M14 9.2505C12.0703 9.2505 10.5 10.8208 10.5 12.7505C10.5 15.4048 13.5107 17.0874 13.6396 17.1577C13.7519 17.2192 13.8759 17.2505 14 17.2505C14.1241 17.2505 14.248 17.2193 14.3604 17.1577C14.4893 17.0874 17.5 15.4048 17.5 12.7505C17.5 10.8208 15.9297 9.2505 14 9.2505ZM14 13.7505C13.4478 13.7505 13 13.3027 13 12.7505C13 12.1983 13.4478 11.7505 14 11.7505C14.5522 11.7505 15 12.1982 15 12.7505C15 13.3028 14.5522 13.7505 14 13.7505Z"
          fill={fill}
        />
        <path
          d="M10.1284 9.58902C9.42332 10.451 9 11.552 9 12.7505C9 13.9006 9.39011 14.8828 9.89473 15.6747C9.05026 15.867 8.07757 16.0005 7.00006 16.0005C5.26806 16.0005 3.80718 15.6556 2.71404 15.276C1.47808 14.8468 0.805437 13.4059 1.42477 12.181C2.45327 10.1468 4.56099 8.74951 7.00006 8.74951C8.14087 8.74951 9.20912 9.0554 10.1284 9.58902Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 4.75049C4.25 3.2313 5.48133 2.00049 7 2.00049C8.51867 2.00049 9.75 3.2313 9.75 4.75049C9.75 6.26968 8.51867 7.50049 7 7.50049C5.48133 7.50049 4.25 6.26968 4.25 4.75049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.5503 7.08782C10.9712 7.34943 11.468 7.50049 12 7.50049C13.5187 7.50049 14.75 6.26968 14.75 4.75049C14.75 3.2313 13.5187 2.00049 12 2.00049C11.468 2.00049 10.9712 2.15155 10.5503 2.41315C10.9926 3.08366 11.25 3.88692 11.25 4.75049C11.25 5.61405 10.9926 6.41732 10.5503 7.08782Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default UsersPin;
