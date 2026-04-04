import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLongHairBadge({
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
          d="M14.5 9C15.88 9 17 10.12 17 11.5C17 11.776 16.776 12 16.5 12C15.12 12 14 10.88 14 9.5C14 9.224 14.224 9 14.5 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 10.25C11.0711 10.25 12.75 8.57107 12.75 6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5C5.25 8.57107 6.92893 10.25 9 10.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 6.5C12.75 4.429 11.071 2.75 9 2.75C6.929 2.75 5.25 4.429 5.25 6.5C5.25 6.585 5.269 6.665 5.275 6.749C6.83 6.74 8.198 5.938 9 4.729C9.802 5.939 11.17 6.74 12.725 6.749C12.731 6.665 12.75 6.585 12.75 6.5Z"
          fill={fill}
          stroke="none"
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
          d="M9.75 16.25H12"
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

export default UserLongHairBadge;
