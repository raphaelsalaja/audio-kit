import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretUpRightDownLeft({
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
          d="M8.795,2.042l-1.969,2.807c-.116,.166,.002,.394,.205,.394h3.938c.202,0,.321-.228,.205-.394l-1.969-2.807c-.1-.142-.31-.142-.409,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.958,8.795l-2.807-1.969c-.166-.116-.394,.002-.394,.205v3.938c0,.202,.228,.321,.394,.205l2.807-1.969c.142-.1,.142-.31,0-.409Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.205,15.958l1.969-2.807c.116-.166-.002-.394-.205-.394h-3.938c-.202,0-.321,.228-.205,.394l1.969,2.807c.1,.142,.31,.142,.409,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.042,9.205l2.807,1.969c.166,.116,.394-.002,.394-.205v-3.938c0-.202-.228-.321-.394-.205l-2.807,1.969c-.142,.1-.142,.31,0,.409Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CaretUpRightDownLeft;
