import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPlus({
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
          d="M10,14.75c0-1.241,1.009-2.25,2.25-2.25h.25v-.25c0-1.241,1.009-2.25,2.25-2.25s2.25,1.009,2.25,2.25V4.997c0-.534-.239-1.031-.655-1.365-.416-.333-.954-.459-1.475-.343l-2.999,.666c-.047,.01-.094,.007-.139-.009l-4.952-1.801c-.314-.114-.653-.136-.978-.063l-3.432,.762c-.807,.179-1.371,.882-1.371,1.708V13.003c0,.534,.239,1.031,.655,1.365,.416,.334,.954,.458,1.475,.343l2.999-.666c.047-.01,.095-.007,.139,.009l3.857,1.403c-.075-.224-.125-.459-.125-.707Z"
          fill={fill}
        />
        <path
          d="M17.25,14h-1.75v-1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v1.75h-1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h1.75v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h1.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MapPlus;
