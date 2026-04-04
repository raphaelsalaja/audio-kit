import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VShapedArrowLeft({
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
          d="M10.922,2.13c-.344-.234-.81-.144-1.042,.198l-4.25,6.25c-.173,.255-.173,.589,0,.844l4.25,6.25c.146,.213,.381,.328,.621,.328,.145,0,.292-.042,.421-.13,.343-.233,.432-.699,.198-1.042l-3.963-5.828,3.963-5.828c.233-.343,.145-.809-.198-1.042Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default VShapedArrowLeft;
