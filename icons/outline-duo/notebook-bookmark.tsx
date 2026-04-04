import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NotebookBookmark({
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
          d="M6.25 1.75H12.75C13.8546 1.75 14.75 2.64543 14.75 3.75V14.25C14.75 15.3546 13.8546 16.25 12.75 16.25H6.25V1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M13 1.75H9V6.5C9 6.702 9.122 6.885 9.309 6.962C9.496 7.041 9.71 6.997 9.854 6.854L11 5.708L12.146 6.854C12.242 6.95 12.37 7 12.5 7C12.564 7 12.63 6.988 12.691 6.962C12.878 6.885 13 6.702 13 6.5V1.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M6.25 1.75V16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 1.75H5.25C4.14543 1.75 3.25 2.64543 3.25 3.75V14.25C3.25 15.3546 4.14543 16.25 5.25 16.25H12.75C13.8546 16.25 14.75 15.3546 14.75 14.25V3.75C14.75 2.64543 13.8546 1.75 12.75 1.75Z"
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

export default NotebookBookmark;
