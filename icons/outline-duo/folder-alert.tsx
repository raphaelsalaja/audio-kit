import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderAlert({
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
          d="M10.376 8.7002L10.5059 8.53418C11.1542 7.75408 12.0851 7.36588 13.0143 7.36963L13.75 6.75H4.25C3.145 6.75 2.25 7.645 2.25 8.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H6.8125C6.81114 14.6663 6.96899 14.0668 7.32129 13.5107L10.2539 8.87988L10.376 8.7002Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.414"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.716 8.414C15.556 7.47 14.739 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H6.0666"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.5 16.25H15.933C16.721 16.25 17.2 15.381 16.778 14.715L13.845 10.084C13.452 9.46402 12.548 9.46402 12.155 10.084L9.22199 14.715C8.79999 15.381 9.27899 16.25 10.067 16.25H10.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 12.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 17.5C13.4142 17.5 13.75 17.164 13.75 16.75C13.75 16.336 13.4142 16 13 16C12.5858 16 12.25 16.336 12.25 16.75C12.25 17.164 12.5858 17.5 13 17.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderAlert;
