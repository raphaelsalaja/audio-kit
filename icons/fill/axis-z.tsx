import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AxisZ({
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
          d="M16.25,10H8V1.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V10.439L1.47,15.47c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l5.03-5.03h8.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M5.25,17H1.75c-.414,0-.75-.336-.75-.75v-3.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.75h2.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AxisZ;
