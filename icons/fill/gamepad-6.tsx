import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad6({
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
          d="M9,6.5c-.414,0-.75-.336-.75-.75v-.75c0-1.378,1.121-2.5,2.5-2.5h1.75c.552,0,1-.449,1-1,0-.414,.336-.75,.75-.75s.75,.336,.75,.75c0,1.378-1.121,2.5-2.5,2.5h-1.75c-.552,0-1,.449-1,1v.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,5H4.75C2.131,5,0,7.131,0,9.75s2.131,4.75,4.75,4.75c1.038,0,2.054-.353,2.889-1h2.723c.835,.647,1.851,1,2.889,1,2.619,0,4.75-2.131,4.75-4.75s-2.131-4.75-4.75-4.75Zm-7,5.5h-.75v.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-.75h-.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.75v-.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v.75h.75c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm6.5,.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Zm1.5-1.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75,.75,.336,.75,.75-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gamepad6;
