import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Plus({
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
          d="M12.523 3.75H5C3.895 3.75 3 4.645 3 5.75V9.51373C3.08208 9.50466 3.1655 9.5 3.25 9.5C4.49264 9.5 5.5 10.5074 5.5 11.75V12H5.75C6.90814 12 7.86191 12.875 7.98627 14H12.523C12.825 14 13.11 13.864 13.3 13.629L17.25 9L13.3 4.121C13.11 3.886 12.825 3.75 12.523 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.25 8.75V5.75C3.25 4.645 4.145 3.75 5.25 3.75H12.523C12.825 3.75 13.11 3.886 13.3 4.121L17.25 9L13.3 13.879C13.11 14.114 12.825 14.25 12.523 14.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 11.75V16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 14.25H0.75"
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

export default Label2Plus;
