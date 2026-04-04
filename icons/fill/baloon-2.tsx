import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Baloon2({
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
          d="M10.854,15.74l-1.5-1.5c-.195-.195-.512-.195-.707,0l-1.5,1.5c-.113,.113-.165,.272-.141,.43,.024,.157,.122,.294,.263,.367,.59,.308,1.168,.461,1.743,.461s1.148-.155,1.724-.464c.14-.075,.235-.211,.258-.368,.023-.156-.029-.314-.141-.426Z"
          fill={secondaryfill}
        />
        <path
          d="M9,1c-3.446,0-6.25,3.14-6.25,7s2.804,7,6.25,7,6.25-3.14,6.25-7S12.446,1,9,1Zm0,4c-1.241,0-2.25,1.346-2.25,3,0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-2.481,1.682-4.5,3.75-4.5,.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Baloon2;
