import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapPosition({
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
          d="M11,12.75c0-2.343,1.907-4.25,4.25-4.25,.625,0,1.215,.144,1.75,.387v-3.891c0-.534-.239-1.031-.655-1.365-.416-.334-.954-.46-1.475-.343l-2.999,.666c-.047,.01-.094,.007-.139-.009l-4.952-1.801c-.314-.114-.653-.136-.978-.063l-3.432,.762c-.807,.179-1.371,.882-1.371,1.708V13.003c0,.534,.239,1.031,.655,1.365,.416,.334,.954,.46,1.475,.343l2.999-.666c.047-.01,.095-.007,.139,.009l4.952,1.801c.193,.07,.395,.105,.597,.105,.127,0,.255-.014,.38-.042l.202-.045c-.864-.787-1.399-1.91-1.399-3.124Z"
          fill={fill}
        />
        <path
          d="M15.25,10c-1.517,0-2.75,1.233-2.75,2.75,0,1.255,.849,2.304,2,2.633v1.867c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.867c1.151-.329,2-1.378,2-2.633,0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MapPosition;
