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
          d="M9 10.5C9.41421 10.5 9.75 10.8358 9.75 11.25V15.75C9.75 16.1642 9.41421 16.5 9 16.5C8.58579 16.5 8.25 16.1642 8.25 15.75V11.25C8.25 10.8358 8.58579 10.5 9 10.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 3.75C1.5 2.50792 2.50726 1.5 3.75 1.5H14.25C15.4927 1.5 16.5 2.50792 16.5 3.75V9.75C16.5 10.9921 15.4927 12 14.25 12H3.75C2.50726 12 1.5 10.9921 1.5 9.75V3.75ZM4.5 6.75C4.5 6.33579 4.83579 6 5.25 6H9C9.41421 6 9.75 6.33579 9.75 6.75C9.75 7.16421 9.41421 7.5 9 7.5H5.25C4.83579 7.5 4.5 7.16421 4.5 6.75ZM12 6C11.5858 6 11.25 6.33579 11.25 6.75C11.25 7.16421 11.5858 7.5 12 7.5H12.75C13.1642 7.5 13.5 7.16421 13.5 6.75C13.5 6.33579 13.1642 6 12.75 6H12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 15.75C4.25 15.3358 4.58579 15 5 15H13C13.4142 15 13.75 15.3358 13.75 15.75C13.75 16.1642 13.4142 16.5 13 16.5H5C4.58579 16.5 4.25 16.1642 4.25 15.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DeskNamePlate;
