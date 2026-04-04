import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Transform({
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
          d="M5.37313 1.11915C4.23105 0.683467 3 1.52029 3 2.74977V15.2498C3 16.4788 4.23039 17.3163 5.37265 16.8809L13.8763 13.6494C14.5523 13.3882 15 12.741 15 12.0099V5.98988C15 5.26442 14.5482 4.62004 13.8763 4.36046L5.37313 1.11915Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Transform;
