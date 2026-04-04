import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineRight({
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
          d="M10.25,9.75H2.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75H10.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M15.967,7.965l-4.517-3.058c-.384-.26-.878-.286-1.287-.069-.41,.217-.664,.641-.664,1.104v6.115c0,.463,.254,.887,.664,1.104,.184,.098,.385,.146,.586,.146,.245,0,.489-.072,.701-.215l4.517-3.058c.344-.233,.549-.62,.549-1.035s-.206-.802-.549-1.035Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineRight;
