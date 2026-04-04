import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CursorRays({
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
          d="M8.09499 7.77801L15.409 10.288C15.631 10.364 15.635 10.676 15.416 10.758L12.137 11.991C12.07 12.016 12.016 12.07 11.991 12.137L10.758 15.416C10.675 15.635 10.364 15.631 10.288 15.409L7.77799 8.09501C7.70999 7.89801 7.89899 7.71001 8.09599 7.77701L8.09499 7.77801Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.09499 7.77801L15.409 10.288C15.631 10.364 15.635 10.676 15.416 10.758L12.137 11.991C12.07 12.016 12.016 12.07 11.991 12.137L10.758 15.416C10.675 15.635 10.364 15.631 10.288 15.409L7.77799 8.09501C7.70999 7.89801 7.89899 7.71001 8.09599 7.77701L8.09499 7.77801Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.031 12.031L16.243 16.243"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 1.75V3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.993 3.507L10.578 4.922"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.50699 11.993L4.92199 10.578"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 7.75H3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.50699 3.507L4.92199 4.922"
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

export default CursorRays;
