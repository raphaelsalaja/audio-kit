import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Path({
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
          d="M10.5 11.75C10.5 10.7838 11.2838 10 12.25 10H14.25C15.2162 10 16 10.7838 16 11.75V13.75C16 14.7162 15.2162 15.5 14.25 15.5H12.25C11.2838 15.5 10.5 14.7162 10.5 13.75V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.5 3.25C4.5 2.83579 4.83579 2.5 5.25 2.5H12.875C14.6012 2.5 16 3.89879 16 5.625C16 7.35121 14.6012 8.75 12.875 8.75H5.125C4.22721 8.75 3.5 9.47721 3.5 10.375C3.5 11.2728 4.22721 12 5.125 12H8.75C9.16421 12 9.5 12.3358 9.5 12.75C9.5 13.1642 9.16421 13.5 8.75 13.5H5.125C3.39879 13.5 2 12.1012 2 10.375C2 8.64879 3.39879 7.25 5.125 7.25H12.875C13.7728 7.25 14.5 6.52279 14.5 5.625C14.5 4.72721 13.7728 4 12.875 4H5.25C4.83579 4 4.5 3.66421 4.5 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Path;
