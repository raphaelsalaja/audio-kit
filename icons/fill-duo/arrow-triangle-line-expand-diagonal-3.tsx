import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineExpandDiagonal3({
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
          d="M5.12499 13.625C4.93299 13.625 4.74099 13.552 4.59499 13.405C4.30199 13.112 4.30199 12.637 4.59499 12.344L12.345 4.59399C12.638 4.30099 13.113 4.30099 13.406 4.59399C13.699 4.88699 13.699 5.36199 13.406 5.65499L5.656 13.405C5.51 13.551 5.318 13.625 5.126 13.625H5.12499Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.707 10.396C3.42 10.109 2.994 10.024 2.617 10.179C2.242 10.334 2 10.697 2 11.103V14.999C2 15.55 2.449 15.999 3 15.999H6.896C7.302 15.999 7.66501 15.757 7.82001 15.382C7.97501 15.007 7.89 14.579 7.603 14.292L3.707 10.396Z"
          fill={fill}
        />
        <path
          d="M15 2H11.104C10.698 2 10.335 2.242 10.18 2.617C10.025 2.992 10.11 3.42 10.397 3.707L14.293 7.603C14.485 7.795 14.739 7.896 14.999 7.896C15.128 7.896 15.258 7.871 15.383 7.819C15.758 7.664 16 7.30099 16 6.89499V3C16 2.449 15.551 2 15 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineExpandDiagonal3;
