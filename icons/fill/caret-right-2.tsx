import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRight2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m9.479,4.752L4.832,1.653c-.459-.307-1.049-.336-1.54-.074-.488.261-.792.768-.792,1.322v6.197c0,.554.304,1.061.792,1.322.223.119.466.178.708.178.291,0,.581-.085.832-.252l4.647-3.099c.418-.279.668-.746.668-1.248s-.25-.969-.668-1.248Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CaretRight2;
