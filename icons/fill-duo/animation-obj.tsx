import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AnimationObj({
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
          d="M8.58425 4.01078C7.57118 2.99779 5.92882 2.99779 4.91575 4.01078L1.75995 7.16568C0.746854 8.17878 0.746784 9.82222 1.75987 10.8353L4.91567 13.9911C5.92883 15.0042 7.57121 15.0042 8.58432 13.9911L11.7401 10.8354C12.7533 9.82225 12.7533 8.17882 11.7401 7.16572L8.58425 4.01078Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.0842 4.01078C12.0712 2.99779 10.4288 2.99779 9.41575 4.01078L6.25995 7.16568C5.24685 8.17878 5.24678 9.82222 6.25987 10.8353L9.41567 13.9911C10.4288 15.0042 12.0712 15.0042 13.0843 13.9911L16.2401 10.8354C17.2533 9.82225 17.2533 8.17882 16.2401 7.16572L13.0842 4.01078Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AnimationObj;
