import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GymBag({
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
          d="M6.5,7v-2c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5v2h1.5v-2c0-2.206-1.794-4-4-4s-4,1.794-4,4v2h1.5Z"
          fill={secondaryfill}
        />
        <path
          d="M16.248,7.075c-.28-.653-.916-1.075-1.619-1.075H3.371c-.703,0-1.338,.422-1.619,1.075-.679,1.581-.752,3.272-.752,3.925,0,1.795,.583,3.431,.762,3.889,.262,.675,.902,1.111,1.631,1.111h1.107v-7.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v7.75h6v-7.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v7.75h1.107c.729,0,1.369-.436,1.631-1.11,.179-.458,.762-2.094,.762-3.89,0-.653-.073-2.344-.752-3.925Zm-6.498,2.925h-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h1.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GymBag;
