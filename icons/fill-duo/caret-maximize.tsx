import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximize({
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
          d="M15 2H11.604C11.198 2 10.835 2.242 10.68 2.617C10.525 2.992 10.61 3.41997 10.897 3.70697L14.293 7.10303C14.485 7.29503 14.739 7.396 14.999 7.396C15.128 7.396 15.258 7.37097 15.383 7.31897C15.758 7.16397 16 6.80102 16 6.39502V3C16 2.449 15.551 2 15 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M3.707 10.896C3.42 10.609 2.993 10.524 2.617 10.679C2.242 10.834 2 11.197 2 11.603V14.999C2 15.55 2.449 15.999 3 15.999H6.396C6.802 15.999 7.16501 15.757 7.32001 15.382C7.47501 15.007 7.39 14.579 7.103 14.292L3.707 10.896Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.396 2H3C2.449 2 2 2.449 2 3V6.396C2 6.802 2.242 7.16501 2.617 7.32001C2.742 7.37201 2.87201 7.39697 3.00101 7.39697C3.26101 7.39697 3.515 7.295 3.707 7.104L7.103 3.70801C7.39 3.42101 7.47501 2.99298 7.32001 2.61798C7.16501 2.24298 6.802 2 6.396 2Z"
          fill={fill}
        />
        <path
          d="M15.383 10.68C15.008 10.524 14.581 10.61 14.293 10.897L10.897 14.293C10.61 14.58 10.525 15.008 10.68 15.383C10.835 15.758 11.198 16 11.604 16H15C15.551 16 16 15.551 16 15V11.604C16 11.198 15.758 10.835 15.383 10.68Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMaximize;
