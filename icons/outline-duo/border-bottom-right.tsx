import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderBottomRight({
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
          d="M15.5 2.5H2.5V15.5H15.5V2.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 9.75C3.16421 9.75 3.5 9.41421 3.5 9C3.5 8.58579 3.16421 8.25 2.75 8.25C2.33579 8.25 2 8.58579 2 9C2 9.41421 2.33579 9.75 2.75 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 9.75C6.28921 9.75 6.625 9.41421 6.625 9C6.625 8.58579 6.28921 8.25 5.875 8.25C5.46079 8.25 5.125 8.58579 5.125 9C5.125 9.41421 5.46079 9.75 5.875 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 9.75C12.5392 9.75 12.875 9.41421 12.875 9C12.875 8.58579 12.5392 8.25 12.125 8.25C11.7108 8.25 11.375 8.58579 11.375 9C11.375 9.41421 11.7108 9.75 12.125 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 12.875C9.41421 12.875 9.75 12.5392 9.75 12.125C9.75 11.7108 9.41421 11.375 9 11.375C8.58579 11.375 8.25 11.7108 8.25 12.125C8.25 12.5392 8.58579 12.875 9 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 6.625C9.41421 6.625 9.75 6.28921 9.75 5.875C9.75 5.46079 9.41421 5.125 9 5.125C8.58579 5.125 8.25 5.46079 8.25 5.875C8.25 6.28921 8.58579 6.625 9 6.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 3.5C9.41421 3.5 9.75 3.16421 9.75 2.75C9.75 2.33579 9.41421 2 9 2C8.58579 2 8.25 2.33579 8.25 2.75C8.25 3.16421 8.58579 3.5 9 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 12.875C3.16421 12.875 3.5 12.5392 3.5 12.125C3.5 11.7108 3.16421 11.375 2.75 11.375C2.33579 11.375 2 11.7108 2 12.125C2 12.5392 2.33579 12.875 2.75 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 6.625C3.16421 6.625 3.5 6.28921 3.5 5.875C3.5 5.46079 3.16421 5.125 2.75 5.125C2.33579 5.125 2 5.46079 2 5.875C2 6.28921 2.33579 6.625 2.75 6.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 3.5C3.16421 3.5 3.5 3.16421 3.5 2.75C3.5 2.33579 3.16421 2 2.75 2C2.33579 2 2 2.33579 2 2.75C2 3.16421 2.33579 3.5 2.75 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 3.5C6.28921 3.5 6.625 3.16421 6.625 2.75C6.625 2.33579 6.28921 2 5.875 2C5.46079 2 5.125 2.33579 5.125 2.75C5.125 3.16421 5.46079 3.5 5.875 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 3.5C12.5392 3.5 12.875 3.16421 12.875 2.75C12.875 2.33579 12.5392 2 12.125 2C11.7108 2 11.375 2.33579 11.375 2.75C11.375 3.16421 11.7108 3.5 12.125 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 15.25H15.25V2.75"
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

export default BorderBottomRight;
