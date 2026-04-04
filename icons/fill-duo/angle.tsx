import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Angle({
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
          d="M2.75 8.25C6.61593 8.25 9.75 11.384 9.75 15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V13.25C3.5 13.9408 4.05921 14.5 4.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H4.75C3.23079 16 2 14.7692 2 13.25V2.75C2 2.33579 2.33579 2 2.75 2Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Angle;
