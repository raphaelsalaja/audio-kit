import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjReduceSizeX({
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
          d="M5 4.75C5 3.23079 6.23079 2 7.75 2H10.25C11.7692 2 13 3.23079 13 4.75V13.25C13 14.7692 11.7692 16 10.25 16H7.75C6.23079 16 5 14.7692 5 13.25V4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M17.075 10.94C17.333 10.83 17.5 10.585 17.5 10.316V7.68404C17.5 7.41504 17.333 7.17001 17.075 7.06001C16.817 6.95001 16.513 6.99399 16.301 7.17299L14.742 8.48903C14.588 8.61903 14.499 8.80499 14.499 9.00099C14.499 9.19699 14.588 9.38304 14.741 9.51204L16.3 10.828C16.511 11.007 16.816 11.05 17.075 10.94Z"
          fill={secondaryfill}
        />
        <path
          d="M0.925003 10.94C0.667003 10.83 0.5 10.585 0.5 10.316V7.68404C0.5 7.41504 0.667003 7.17001 0.925003 7.06001C1.183 6.95001 1.48701 6.99399 1.69901 7.17299L3.258 8.48903C3.412 8.61903 3.50101 8.80499 3.50101 9.00099C3.50101 9.19599 3.412 9.38304 3.259 9.51204L1.7 10.828C1.489 11.007 1.184 11.05 0.925003 10.94Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ObjReduceSizeX;
