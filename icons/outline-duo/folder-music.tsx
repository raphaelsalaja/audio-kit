import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderMusic({
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
          d="M4.25 6.75H13.75C14.8498 6.75 15.7415 7.63653 15.7499 8.7343C15.1814 8.4524 14.5077 8.41835 13.8987 8.66725C13.0528 9.01302 12.5 9.83611 12.5 10.75V12.075C10.9483 12.39 9.73096 13.6631 9.51953 15.25H4.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13.25 17.25C14.0784 17.25 14.75 16.5784 14.75 15.75C14.75 14.9216 14.0784 14.25 13.25 14.25C12.4216 14.25 11.75 14.9216 11.75 15.75C11.75 16.5784 12.4216 17.25 13.25 17.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.72 8.452C15.575 7.49 14.753 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.77789"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.452"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.25C14.0784 17.25 14.75 16.5784 14.75 15.75C14.75 14.9216 14.0784 14.25 13.25 14.25C12.4216 14.25 11.75 14.9216 11.75 15.75C11.75 16.5784 12.4216 17.25 13.25 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.75V10.75C15.4669 11.4804 16.3175 12.0778 17.25 12.5"
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

export default FolderMusic;
