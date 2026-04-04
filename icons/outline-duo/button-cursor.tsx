import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ButtonCursor({
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
          d="m13.5,12.25H4.5c-1.5187,0-2.75-1.2312-2.75-2.75v3c0,1.5188,1.2313,2.75,2.75,2.75h9c1.5188,0,2.75-1.2312,2.75-2.75v-3c0,1.5188-1.2312,2.75-2.75,2.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m16.25,9.5v3c0,1.5188-1.2312,2.75-2.75,2.75H4.5c-1.5188,0-2.75-1.2312-2.75-2.75v-3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.1263,7.2324l5.94-2.1704c.2503-.0914.243-.4479-.0107-.5291l-2.7185-.8699-.8699-2.7185c-.0812-.2538-.4377-.261-.5291-.0107l-2.1704,5.94c-.0816.2235.1352.4404.3587.3587Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m8.1263,7.2324l5.94-2.1704c.2503-.0914.243-.4479-.0107-.5291l-2.7185-.8699-.8699-2.7185c-.0812-.2538-.4377-.261-.5291-.0107l-2.1704,5.94c-.0816.2235.1352.4404.3587.3587Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.7712,6.75h-.2712c-1.5188,0-2.75,1.2312-2.75,2.75s1.2312,2.75,2.75,2.75h9c1.5188,0,2.75-1.2312,2.75-2.75,0-.7036-.272-1.3384-.7067-1.8247"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default ButtonCursor;
