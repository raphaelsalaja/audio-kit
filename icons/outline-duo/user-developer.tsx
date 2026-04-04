import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDeveloper({
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
          d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.953 14C3.251 12.042 5.475 10.75 8 10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.833 7.684C9.311 8.041 8.68 8.25 8 8.25C6.205 8.25 4.75 6.795 4.75 5C4.75 3.205 6.205 1.75 8 1.75C9.795 1.75 11.25 3.205 11.25 5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 3C14.6642 3 15 2.66421 15 2.25C15 1.83579 14.6642 1.5 14.25 1.5C13.8358 1.5 13.5 1.83579 13.5 2.25C13.5 2.66421 13.8358 3 14.25 3Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.925 16.25H8.75L10.618 12.047C10.698 11.866 10.877 11.75 11.075 11.75H16.481C16.843 11.75 17.085 12.122 16.938 12.453L15.382 15.953C15.302 16.134 15.123 16.25 14.925 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.25H5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.49999 5L4.53899 4.245C3.80099 4.104 3.07299 4.531 2.83499 5.244"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 3.5H8C7.44772 3.5 7 3.94772 7 4.5V5.5C7 6.05228 7.44772 6.5 8 6.5H9C9.55228 6.5 10 6.05228 10 5.5V4.5C10 3.94772 9.55228 3.5 9 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M12.5 3.5H11.5C10.9477 3.5 10.5 3.94772 10.5 4.5V5.5C10.5 6.05228 10.9477 6.5 11.5 6.5H12.5C13.0523 6.5 13.5 6.05228 13.5 5.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2 8L0.75 9L2 10"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 9L17.25 7.5L15.5 6"
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

export default UserDeveloper;
