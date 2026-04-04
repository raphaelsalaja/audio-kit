import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VShapedArrowRight({
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
          d="M8.12,2.328c-.232-.342-.699-.433-1.042-.198-.343,.233-.432,.699-.198,1.042l3.963,5.828-3.963,5.828c-.233,.343-.145,.809,.198,1.042,.129,.088,.276,.13,.421,.13,.24,0,.476-.115,.621-.328l4.25-6.25c.173-.255,.173-.589,0-.844L8.12,2.328Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VShapedArrowRight;
