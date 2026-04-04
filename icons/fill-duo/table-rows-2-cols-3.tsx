import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRows2Cols3({
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
          d="M16.5 4.75V13.25C16.5 14.77 15.267 16 13.75 16H4.25C2.733 16 1.5 14.77 1.5 13.25V4.75C1.5 3.23 2.733 2 4.25 2H13.75C15.267 2 16.5 3.23 16.5 4.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5 2H11V8.25H7V2H5.5V8.25H1.5V9.75H5.5V16H7V9.75H11V16H12.5V9.75H16.5V8.25H12.5V2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRows2Cols3;
