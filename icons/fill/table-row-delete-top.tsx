import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowDeleteTop({
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
          d="M6.47 4.71999C6.32 4.86599 6.25 5.05802 6.25 5.25002C6.25 5.44202 6.3199 5.63405 6.47 5.78005C6.76 6.07305 7.24 6.07305 7.5301 5.78005L9.0001 4.31008L10.4701 5.78005C10.7601 6.07305 11.2401 6.07305 11.5302 5.78005C11.8201 5.48705 11.8201 5.01202 11.5302 4.71902L10.0602 3.24905L11.5302 1.77908C11.8201 1.48608 11.8201 1.01104 11.5302 0.718041C11.2402 0.425041 10.7602 0.425041 10.4701 0.718041L9.0001 2.18801L7.5301 0.718041C7.2401 0.425041 6.7601 0.425041 6.47 0.718041C6.32 0.864041 6.25 1.05607 6.25 1.24807C6.25 1.44007 6.3199 1.63198 6.47 1.77798L7.94 3.24807L6.47 4.71804V4.71999Z"
          fill={secondaryfill}
        />
        <path
          d="M16 13.25V5C16 3.4834 14.7666 2.25 13.25 2.25C12.8359 2.25 12.5 2.5859 12.5 3C12.5 3.4141 12.8359 3.75 13.25 3.75C13.9395 3.75 14.5 4.3105 14.5 5V9H3.5V5C3.5 4.3105 4.0605 3.75 4.75 3.75C5.1641 3.75 5.5 3.4141 5.5 3C5.5 2.5859 5.1641 2.25 4.75 2.25C3.2334 2.25 2 3.4834 2 5V13.25C2 14.7666 3.2334 16 4.75 16H13.25C14.7666 16 16 14.7666 16 13.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowDeleteTop;
