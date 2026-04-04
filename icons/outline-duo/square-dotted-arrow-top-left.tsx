import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDottedArrowTopLeft({
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
          d="M13.5 15.5C14.6046 15.5 15.5 14.6046 15.5 13.5L15.5 4.5C15.5 3.39543 14.6046 2.5 13.5 2.5L8.75 2.5L8.75 8.75L2.5 8.75L2.5 13.5C2.5 14.6046 3.39543 15.5 4.5 15.5L13.5 15.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M15.25 9.75C15.6642 9.75 16 9.41421 16 9C16 8.58579 15.6642 8.25 15.25 8.25C14.8358 8.25 14.5 8.58579 14.5 9C14.5 9.41421 14.8358 9.75 15.25 9.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 16C9.41421 16 9.75 15.6642 9.75 15.25C9.75 14.8358 9.41421 14.5 9 14.5C8.58579 14.5 8.25 14.8358 8.25 15.25C8.25 15.6642 8.58579 16 9 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 16C15.6642 16 16 15.6642 16 15.25C16 14.8358 15.6642 14.5 15.25 14.5C14.8358 14.5 14.5 14.8358 14.5 15.25C14.5 15.6642 14.8358 16 15.25 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 12.875C15.6642 12.875 16 12.5392 16 12.125C16 11.7108 15.6642 11.375 15.25 11.375C14.8358 11.375 14.5 11.7108 14.5 12.125C14.5 12.5392 14.8358 12.875 15.25 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 6.625C15.6642 6.625 16 6.28921 16 5.875C16 5.46079 15.6642 5.125 15.25 5.125C14.8358 5.125 14.5 5.46079 14.5 5.875C14.5 6.28921 14.8358 6.625 15.25 6.625Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.25 3.5C15.6642 3.5 16 3.16421 16 2.75C16 2.33579 15.6642 2 15.25 2C14.8358 2 14.5 2.33579 14.5 2.75C14.5 3.16421 14.8358 3.5 15.25 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 16C3.16421 16 3.5 15.6642 3.5 15.25C3.5 14.8358 3.16421 14.5 2.75 14.5C2.33579 14.5 2 14.8358 2 15.25C2 15.6642 2.33579 16 2.75 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.75 12.875C3.16421 12.875 3.5 12.5392 3.5 12.125C3.5 11.7108 3.16421 11.375 2.75 11.375C2.33579 11.375 2 11.7108 2 12.125C2 12.5392 2.33579 12.875 2.75 12.875Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.875 16C6.28921 16 6.625 15.6642 6.625 15.25C6.625 14.8358 6.28921 14.5 5.875 14.5C5.46079 14.5 5.125 14.8358 5.125 15.25C5.125 15.6642 5.46079 16 5.875 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 16C12.5392 16 12.875 15.6642 12.875 15.25C12.875 14.8358 12.5392 14.5 12.125 14.5C11.7108 14.5 11.375 14.8358 11.375 15.25C11.375 15.6642 11.7108 16 12.125 16Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.125 3.5C12.5392 3.5 12.875 3.16421 12.875 2.75C12.875 2.33579 12.5392 2 12.125 2C11.7108 2 11.375 2.33579 11.375 2.75C11.375 3.16421 11.7108 3.5 12.125 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.75 2.75V8.75H2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 8.75L2.75 2.75"
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

export default SquareDottedArrowTopLeft;
