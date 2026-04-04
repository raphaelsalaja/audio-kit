import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableColDeleteLeft({
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
          d="M4.72004 11.53C4.86604 11.68 5.05804 11.75 5.25004 11.75C5.44204 11.75 5.63404 11.6801 5.78004 11.53C6.07304 11.24 6.07304 10.76 5.78004 10.4699L4.31004 8.9999L5.78004 7.52992C6.07304 7.23992 6.07304 6.75997 5.78004 6.46987C5.48704 6.17997 5.01203 6.17997 4.71903 6.46987L3.24903 7.93984L1.77905 6.46987C1.48605 6.17997 1.01104 6.17997 0.718041 6.46987C0.425041 6.75987 0.425041 7.23982 0.718041 7.52992L2.18804 8.9999L0.718041 10.4699C0.425041 10.7599 0.425041 11.2399 0.718041 11.53C0.864041 11.68 1.05604 11.75 1.24804 11.75C1.44004 11.75 1.63204 11.6801 1.77804 11.53L3.24804 10.0601L4.71804 11.53H4.72004Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25 2H5C3.4834 2 2.25 3.2334 2.25 4.75C2.25 5.1641 2.5859 5.5 3 5.5C3.4141 5.5 3.75 5.1641 3.75 4.75C3.75 4.0605 4.3105 3.5 5 3.5H9V14.5H5C4.3105 14.5 3.75 13.9395 3.75 13.25C3.75 12.8359 3.4141 12.5 3 12.5C2.5859 12.5 2.25 12.8359 2.25 13.25C2.25 14.7666 3.4834 16 5 16H13.25C14.7666 16 16 14.7666 16 13.25V4.75C16 3.2334 14.7666 2 13.25 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableColDeleteLeft;
