import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceLaughing({
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
          d="M9 16.25C13.0041 16.25 16.25 13.0041 16.25 9C16.25 4.99594 13.0041 1.75 9 1.75C4.99594 1.75 1.75 4.99594 1.75 9C1.75 13.0041 4.99594 16.25 9 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.897 10.757C11.743 10.603 11.531 10.536 11.314 10.568C9.782 10.807 8.202 10.806 6.676 10.567C6.462 10.535 6.255 10.602 6.104 10.752C5.95 10.905 5.877 11.128 5.911 11.35C6.141 12.861 7.469 14.001 9 14.001C10.531 14.001 11.86 12.86 12.089 11.347C12.122 11.131 12.05 10.911 11.897 10.758V10.757Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.692 13.49C13.364 15.171 11.308 16.25 9 16.25C6.692 16.25 4.635 15.171 3.308 13.49"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16 7.107C15.168 4.021 12.349 1.75 9 1.75C5.651 1.75 2.832 4.021 2 7.107"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 8.25C5 7.56 5.56 7 6.25 7C6.94 7 7.5 7.56 7.5 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 8.25C10.5 7.56 11.06 7 11.75 7C12.44 7 13 7.56 13 8.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.477997 11.917C1.089 12.487 2.048 12.452 2.619 11.84C3.139 11.282 3.225 10.22 3.223 9.565C3.223 9.246 2.953 8.995 2.635 9.016C1.981 9.059 0.926997 9.218 0.406997 9.776C-0.165003 10.389 -0.133003 11.348 0.477997 11.918V11.917Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M17.522 11.917C16.911 12.487 15.952 12.452 15.381 11.84C14.861 11.282 14.775 10.22 14.777 9.565C14.777 9.246 15.047 8.995 15.365 9.016C16.019 9.059 17.073 9.218 17.593 9.776C18.165 10.389 18.133 11.348 17.522 11.918V11.917Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FaceLaughing;
