import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandTruck({
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
          d="M12.626 3.19L8.29897 4.42399C7.76697 4.57499 7.45996 5.129 7.61096 5.66L8.70796 9.50599C8.85996 10.038 9.41297 10.345 9.94397 10.194L14.272 8.95899C14.803 8.80799 15.111 8.255 14.959 7.723L13.862 3.87699C13.71 3.34599 13.157 3.038 12.626 3.19Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.462 3.80701L11.011 5.73"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.27502 13.887L16.75 11.47"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.019 12.318L3.507 3.47701C3.385 3.047 2.992 2.75 2.545 2.75H1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 15.75C7.466 15.75 8.25 14.966 8.25 14C8.25 13.034 7.466 12.25 6.5 12.25C5.534 12.25 4.75 13.034 4.75 14C4.75 14.966 5.534 15.75 6.5 15.75Z"
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

export default HandTruck;
