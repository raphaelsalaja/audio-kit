import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeskNamePlate({
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
          d="M3.75 1.5C2.50726 1.5 1.5 2.50792 1.5 3.75V9.75C1.5 10.9921 2.50726 12 3.75 12H14.25C15.4927 12 16.5 10.9921 16.5 9.75V3.75C16.5 2.50792 15.4927 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.5 6.75C4.5 6.33579 4.83579 6 5.25 6H9C9.41421 6 9.75 6.33579 9.75 6.75C9.75 7.16421 9.41421 7.5 9 7.5H5.25C4.83579 7.5 4.5 7.16421 4.5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.25 6.75C11.25 6.33579 11.5858 6 12 6H12.75C13.1642 6 13.5 6.33579 13.5 6.75C13.5 7.16421 13.1642 7.5 12.75 7.5H12C11.5858 7.5 11.25 7.16421 11.25 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 12H8.25V15H5C4.58579 15 4.25 15.3358 4.25 15.75C4.25 16.1642 4.58579 16.5 5 16.5H9H13C13.4142 16.5 13.75 16.1642 13.75 15.75C13.75 15.3358 13.4142 15 13 15H9.75V12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DeskNamePlate;
