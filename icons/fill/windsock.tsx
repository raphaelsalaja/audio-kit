import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Windsock({
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
          d="M3.75,1c-.414,0-.75,.336-.75,.75v14.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V1.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.007,3.933L7.507,2.143c-.37-.077-.752,.014-1.044,.252-.294,.238-.463,.592-.463,.971v6.268c0,.378,.169,.732,.463,.971,.225,.183,.501,.28,.785,.28,.086,0,.173-.009,.259-.027l8.5-1.79h0c.575-.122,.992-.636,.992-1.223v-2.688c0-.587-.417-1.102-.993-1.223ZM7.5,9.326V3.674l2,.421v4.809l-2,.421Zm8-1.685l-2,.421v-3.125l2,.421v2.282Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Windsock;
