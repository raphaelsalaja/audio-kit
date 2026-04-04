import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserShortHair3({
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
          d="M9 10.25C11.0711 10.25 12.75 8.57107 12.75 6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5C5.25 8.57107 6.92893 10.25 9 10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.75 6.5C12.75 8.571 11.071 10.25 9 10.25C6.929 10.25 5.25 8.571 5.25 6.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.953 16C4.251 14.042 6.475 12.75 9 12.75C11.525 12.75 13.749 14.041 15.047 16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 6.5V6.25C12.75 5.145 11.855 4.25 10.75 4.25H7.25C6.145 4.25 5.25 5.145 5.25 6.25V2.75C5.25 2.198 5.698 1.75 6.25 1.75H11.75C12.302 1.75 12.75 2.198 12.75 2.75V6.5Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default UserShortHair3;
