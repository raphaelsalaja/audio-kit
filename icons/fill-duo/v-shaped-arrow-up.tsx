import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VShapedArrowUp({
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
          d="M9.42202 5.62999C9.16702 5.45699 8.83302 5.45699 8.57802 5.62999L2.32802 9.87999C1.98602 10.113 1.89702 10.579 2.13002 10.922C2.36302 11.266 2.83001 11.353 3.17201 11.12L9.00002 7.15697L14.828 11.12C14.957 11.208 15.104 11.25 15.249 11.25C15.489 11.25 15.725 11.135 15.87 10.922C16.103 10.579 16.014 10.113 15.672 9.87999L9.42202 5.62999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VShapedArrowUp;
