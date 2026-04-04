import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Watch3({
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
          d="M3 9C3 5.68679 5.68679 3 9 3C12.3132 3 15 5.68679 15 9C15 12.3132 12.3132 15 9 15C5.68679 15 3 12.3132 3 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6C9.41421 6 9.75 6.33579 9.75 6.75V8.59861L11.666 9.87596C12.0107 10.1057 12.1038 10.5714 11.874 10.916C11.6443 11.2607 11.1786 11.3538 10.834 11.124L8.58397 9.62404C8.37533 9.48494 8.25 9.25076 8.25 9V6.75C8.25 6.33579 8.58579 6 9 6Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.04675 13.5133L5.19346 15.8589C5.25118 16.7806 6.01547 17.5 6.94001 17.5H11.061C11.9856 17.5 12.7498 16.7805 12.8075 15.8588L12.9543 13.5124C11.8983 14.4385 10.5146 15 9.00001 15C7.48588 15 6.10258 14.4389 5.04675 13.5133Z"
          fill={fill}
        />
        <path
          d="M5.04675 4.48673C6.10258 3.56112 7.48588 3 9.00001 3C10.5146 3 11.8983 3.56149 12.9543 4.48764L12.8075 2.14113C12.7498 1.21942 11.9856 0.5 11.061 0.5H6.94001C6.01547 0.5 5.25118 1.21946 5.19346 2.14118L5.04675 4.48673Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Watch3;
