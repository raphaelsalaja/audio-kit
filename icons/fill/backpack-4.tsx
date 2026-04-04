import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Backpack4({
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
          d="M4.86658 1.9991L5.39304 5.6309C5.45247 6.04083 5.16833 6.42132 4.7584 6.48074C4.34847 6.54016 3.96798 6.25602 3.90856 5.8461L3.34065 1.9284C3.2314 1.17466 3.81589 0.4991 4.57769 0.4991H6.58379C7.18672 0.4991 7.70374 0.929502 7.81306 1.52238L8.23536 3.81228C8.31049 4.21962 8.04117 4.61074 7.63383 4.68586C7.22648 4.76099 6.83536 4.49167 6.76024 4.08432L6.37568 1.9991H4.86658Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11.6243 1.99899L11.2398 4.08421C11.1646 4.49156 10.7735 4.76088 10.3662 4.68576C9.95884 4.61063 9.68952 4.21952 9.76464 3.81217L10.1869 1.52241C10.2963 0.929277 10.8134 0.498993 11.4162 0.498993H13.4223C14.1841 0.498993 14.7686 1.17457 14.6593 1.9283L14.0913 5.8461C14.0319 6.25603 13.6514 6.54016 13.2415 6.48073C12.8316 6.4213 12.5474 6.04081 12.6069 5.63088L13.1334 1.99899H11.6243Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M11 11C11 9.89541 10.1046 9 9 9C7.89541 9 7 9.89541 7 11H11Z"
          fill={secondaryfill}
        />
        <path d="M11 12.5V17H7V12.5H11Z" fill={secondaryfill} />
        <path
          d="M9 3C5.40979 3 2.5 5.90979 2.5 9.5V14.25C2.5 15.7692 3.73079 17 5.25 17H5.5V11C5.5 9.06699 7.06699 7.5 9 7.5C10.933 7.5 12.5 9.06699 12.5 11V17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V9.5C15.5 5.90979 12.5902 3 9 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Backpack4;
