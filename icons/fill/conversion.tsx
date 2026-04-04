import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Conversion({
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
          d="M2.75,8H15.25c.304,0,.577-.183,.693-.463,.115-.28,.052-.603-.163-.817L11.28,2.22c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l3.22,3.22H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75Z"
          fill={fill}
        />
        <path
          d="M15.25,10H2.75c-.304,0-.577,.183-.693,.463-.115,.28-.052,.603,.163,.817l4.5,4.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-3.22-3.22H15.25c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Conversion;
