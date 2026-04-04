import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ethereum({
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
          d="M9 0.5C8.75473 0.5 8.52495 0.619932 8.38471 0.821156L2.63471 9.07116C2.50614 9.25562 2.46712 9.48804 2.52839 9.70437C2.58966 9.92071 2.74476 10.0981 2.95096 10.1878L8.70096 12.6878C8.79633 12.7293 8.89817 12.75 9 12.75V0.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.00537 0.5C9.25064 0.5 9.48042 0.619932 9.62067 0.821156L15.3707 9.07116C15.4992 9.25562 15.5383 9.48804 15.477 9.70437C15.4157 9.92071 15.2606 10.0981 15.0544 10.1878L9.30441 12.6878C9.20904 12.7293 9.1072 12.75 9.00537 12.75V0.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M9.00537 12.75C8.90176 12.7507 8.79804 12.73 8.70102 12.6878L2.95102 10.1878C2.83842 10.1388 2.74106 10.0637 2.66589 9.97035L8.41247 17.216C8.55473 17.3954 8.77114 17.5 9.00009 17.5C9.22904 17.5 9.44545 17.3954 9.58771 17.216L15.2908 10.0251C15.224 10.0933 15.144 10.1488 15.0544 10.1878L9.30441 12.6878C9.20904 12.7293 9.1072 12.75 9.00537 12.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Ethereum;
