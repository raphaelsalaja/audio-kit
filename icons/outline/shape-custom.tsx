import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeCustom({
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
          d="M12.397,2.947l.223,3.387,3.861,.605c.538,.085,.705,.634,.273,.905l-4.641,2.918-1.222,4.368c-.16,.35-.574,.504-.925,.344-.036-.016-.07-.036-.103-.058l-3.058-1.978-4.385,1.703c-.554,.216-1.132-.26-.845-.698l2.46-3.778-1.938-3.069c-.197-.312,.047-.688,.48-.738l5.051-.585,3.63-3.619c.368-.368,1.108-.178,1.139,.292Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ShapeCustom;
