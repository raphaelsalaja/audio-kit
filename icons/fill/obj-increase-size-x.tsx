import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjIncreaseSizeX({
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
          d="M14.925 7.06001C14.667 7.17001 14.5 7.41504 14.5 7.68404V10.316C14.5 10.585 14.667 10.83 14.925 10.94C15.183 11.05 15.487 11.006 15.699 10.827L17.258 9.511C17.412 9.381 17.501 9.19504 17.501 8.99904C17.501 8.80304 17.412 8.61699 17.259 8.48799L15.7 7.17201C15.489 6.99301 15.185 6.94904 14.926 7.05904L14.925 7.06001Z"
          fill={secondaryfill}
        />
        <path
          d="M3.075 7.06001C3.333 7.17001 3.5 7.41504 3.5 7.68404V10.316C3.5 10.585 3.333 10.83 3.075 10.94C2.817 11.05 2.513 11.006 2.301 10.827L0.742996 9.51204C0.588996 9.38204 0.5 9.19502 0.5 9.00002C0.5 8.80502 0.588997 8.61803 0.741997 8.48903L2.301 7.17299C2.512 6.99399 2.816 6.95001 3.075 7.06001Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ObjIncreaseSizeX;
