import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera({
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
          d="M7.44299 1C6.7132 1 6.06055 1.45306 5.80481 2.13549L5.48038 3H3.75C2.23079 3 1 4.23079 1 5.75V12.25C1 13.7692 2.23079 15 3.75 15H14.25C15.7692 15 17 13.7692 17 12.25V5.75C17 4.23079 15.7692 3 14.25 3H12.5196L12.1954 2.13605C11.9397 1.45362 11.2868 1 10.557 1H7.44299Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 9C5.5 7.06702 7.06675 5.5 9 5.5C10.9332 5.5 12.5 7.06702 12.5 9C12.5 10.933 10.9332 12.5 9 12.5C7.06675 12.5 5.5 10.933 5.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.25 7C4.664 7 5 6.6642 5 6.25C5 5.8358 4.664 5.5 4.25 5.5C3.836 5.5 3.5 5.8358 3.5 6.25C3.5 6.6642 3.836 7 4.25 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Camera;
