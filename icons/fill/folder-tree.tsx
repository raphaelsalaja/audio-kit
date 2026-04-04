import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderTree({
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
          d="M14.25 2H12.464L12.114 1.599C11.781 1.218 11.301 1 10.796 1H9.75C8.785 1 8 1.785 8 2.75V6.25C8 7.215 8.785 8 9.75 8H14.25C15.215 8 16 7.215 16 6.25V3.75C16 2.785 15.215 2 14.25 2Z"
          fill={fill}
        />
        <path
          d="M14.25 11H12.464L12.114 10.599C11.781 10.218 11.301 10 10.796 10H9.75C8.785 10 8 10.785 8 11.75V15.25C8 16.215 8.785 17 9.75 17H14.25C15.215 17 16 16.215 16 15.25V12.75C16 11.785 15.215 11 14.25 11Z"
          fill={fill}
        />
        <path
          d="M5.75 13H4.25C3.836 13 3.5 12.664 3.5 12.25V5.362C3.736 5.446 3.986 5.5 4.25 5.5H5.75C6.164 5.5 6.5 5.164 6.5 4.75C6.5 4.336 6.164 4 5.75 4H4.25C3.836 4 3.5 3.664 3.5 3.25V1.75C3.5 1.336 3.164 1 2.75 1C2.336 1 2 1.336 2 1.75V12.25C2 13.491 3.009 14.5 4.25 14.5H5.75C6.164 14.5 6.5 14.164 6.5 13.75C6.5 13.336 6.164 13 5.75 13Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FolderTree;
