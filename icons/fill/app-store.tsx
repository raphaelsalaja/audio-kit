import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AppStore({
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
          d="M11.6799 11.25C11.6799 10.8358 12.0157 10.5 12.4299 10.5H16C16.4142 10.5 16.75 10.8358 16.75 11.25C16.75 11.6642 16.4142 12 16 12H12.4299C12.0157 12 11.6799 11.6642 11.6799 11.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M7.12369 2.10124C7.48199 1.89341 7.94093 2.01539 8.14876 2.37369L9.64876 4.95969C9.85659 5.31799 9.73461 5.77693 9.37631 5.98476C9.01801 6.19259 8.55907 6.07061 8.35124 5.71231L6.85124 3.12631C6.64341 2.76801 6.76539 2.30907 7.12369 2.10124Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.3574 7.67704C10.7157 7.46922 11.1746 7.5912 11.3825 7.9495L15.3988 14.8737C15.6066 15.232 15.4846 15.6909 15.1263 15.8988C14.768 16.1066 14.3091 15.9846 14.1012 15.6263L10.0849 8.70211C9.87711 8.34381 9.9991 7.88487 10.3574 7.67704Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10.8763 2.10123C11.2346 2.30905 11.3566 2.76798 11.1488 3.12629L6.21878 11.6263C6.01096 11.9846 5.55203 12.1066 5.19372 11.8988C4.83541 11.691 4.71342 11.232 4.92124 10.8737L9.85123 2.37371C10.059 2.01541 10.518 1.89341 10.8763 2.10123Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.20629 13.6012C4.5646 13.809 4.68659 14.268 4.47878 14.6263L3.89878 15.6263C3.69096 15.9846 3.23202 16.1066 2.87371 15.8988C2.51541 15.691 2.39341 15.232 2.60123 14.8737L3.18123 13.8737C3.38905 13.5154 3.84798 13.3934 4.20629 13.6012Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.25 11.25C1.25 10.8358 1.58579 10.5 2 10.5H9.2518C9.66601 10.5 10.0018 10.8358 10.0018 11.25C10.0018 11.6642 9.66601 12 9.2518 12H2C1.58579 12 1.25 11.6642 1.25 11.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AppStore;
