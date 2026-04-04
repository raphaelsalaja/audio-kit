import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bullseye({
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
          d="M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.25 9C3.25 5.82435 5.82463 3.25 9 3.25C12.1754 3.25 14.75 5.82435 14.75 9C14.75 12.1756 12.1754 14.75 9 14.75C5.82463 14.75 3.25 12.1756 3.25 9ZM9 4.75C6.65301 4.75 4.75 6.65282 4.75 9C4.75 11.3472 6.65301 13.25 9 13.25C11.347 13.25 13.25 11.3472 13.25 9C13.25 6.65282 11.347 4.75 9 4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7 9C7 7.89523 7.89594 7 9 7C10.1041 7 11 7.89523 11 9C11 10.1048 10.1041 11 9 11C7.89594 11 7 10.1048 7 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bullseye;
