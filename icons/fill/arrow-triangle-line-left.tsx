import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineLeft({
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
          d="M15.75,9.75H7.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H15.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M7.836,4.838c-.41-.217-.903-.192-1.287,.069L2.033,7.965c-.344,.233-.549,.62-.549,1.035s.206,.802,.549,1.035l4.517,3.058c.211,.143,.456,.215,.7,.215,.201,0,.402-.049,.586-.146,.41-.217,.664-.641,.664-1.104V5.942c0-.463-.254-.887-.664-1.104Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineLeft;
