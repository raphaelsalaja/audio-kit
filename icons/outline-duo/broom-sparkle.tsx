import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BroomSparkle({
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
          d="M11.2189 12.0482C8.57475 10.4995 6.8151 8.22863 6.10905 7.02393C5.78859 7.20852 5.48144 7.44373 5.197 7.732C3.942 9.003 3.125 9.812 1.75 10C2.048 12.961 3.694 15.256 6.439 16.037C7.067 16.216 7.743 16.07 8.253 15.662C9.25252 14.8633 10.5358 13.528 11.2189 12.0482Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.25 1.5L10.376 7.374"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.376 7.37402C13.534 10.144 10.299 14.027 8.253 15.662C7.743 16.07 7.067 16.216 6.439 16.037C3.694 15.256 2.048 12.961 1.75 10C3.125 9.81202 3.942 9.00302 5.197 7.73202C6.757 6.15102 9 6.16602 10.376 7.37402Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.09601 7.03198C6.58401 7.82298 7.20701 8.66798 8.00001 9.49998C9.07401 10.625 10.194 11.448 11.204 12.046"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.658 11.99L16.395 11.569L15.974 10.306C15.837 9.898 15.162 9.898 15.025 10.306L14.604 11.569L13.341 11.99C13.137 12.058 12.999 12.249 12.999 12.464C12.999 12.679 13.137 12.87 13.341 12.938L14.604 13.359L15.025 14.622C15.093 14.826 15.285 14.964 15.5 14.964C15.715 14.964 15.906 14.826 15.975 14.622L16.396 13.359L17.659 12.938C17.863 12.87 18.001 12.679 18.001 12.464C18.001 12.249 17.862 12.058 17.658 11.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.49298 3.49199L4.54698 3.17699L4.23098 2.22999C4.12898 1.92399 3.62198 1.92399 3.51998 2.22999L3.20398 3.17699L2.25798 3.49199C2.10498 3.54299 2.00098 3.68599 2.00098 3.84799C2.00098 4.00999 2.10498 4.15299 2.25798 4.20399L3.20398 4.51899L3.51998 5.46599C3.57098 5.61899 3.71398 5.72199 3.87498 5.72199C4.03598 5.72199 4.17998 5.61799 4.22998 5.46599L4.54598 4.51899L5.49198 4.20399C5.64498 4.15299 5.74898 4.00999 5.74898 3.84799C5.74898 3.68599 5.64598 3.54299 5.49298 3.49199Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.25 3C8.66421 3 9 2.66421 9 2.25C9 1.83579 8.66421 1.5 8.25 1.5C7.83579 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.83579 3 8.25 3Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default BroomSparkle;
