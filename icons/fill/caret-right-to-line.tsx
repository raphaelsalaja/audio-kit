import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretRightToLine({
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
          d="M15.25,2.5c-.414,0-.75,.336-.75,.75V14.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.25c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.07,7.522h0L4.687,2.84c-.539-.343-1.222-.363-1.779-.056-.56,.308-.907,.896-.907,1.534V13.682c0,.638,.348,1.226,.907,1.534,.263,.145,.553,.216,.843,.216,.326,0,.651-.091,.937-.272l7.384-4.682c.509-.323,.812-.875,.812-1.478s-.304-1.155-.812-1.478Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretRightToLine;
