import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folder3({
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
          d="M4 15.25C4.966 15.25 5.75 14.466 5.75 13.5V9.25C5.75 8.698 6.198 8.25 6.75 8.25H14.75C15.302 8.25 15.75 8.698 15.75 9.25V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 5.75C14.75 5.198 14.302 4.75 13.75 4.75H7.75L6.794 3.22C6.611 2.928 6.291 2.75 5.946 2.75H3.25C2.698 2.75 2.25 3.198 2.25 3.75V13.5C2.25 14.466 3.034 15.25 4 15.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4 15.25C4.966 15.25 5.75 14.466 5.75 13.5V9.25C5.75 8.698 6.198 8.25 6.75 8.25H14.75C15.302 8.25 15.75 8.698 15.75 9.25V13.25C15.75 14.355 14.855 15.25 13.75 15.25H4Z"
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

export default Folder3;
