import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2List({
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
          d="M16.25,15h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M9,14.25c0-.71,.338-1.337,.853-1.75-.516-.413-.853-1.04-.853-1.75,0-1.241,1.01-2.25,2.25-2.25h5c.105,0,.206,.017,.307,.031,.454-.968,.569-2.078,.283-3.166-.217-.826-.693-1.595-1.342-2.164-1.11-.974-2.559-1.368-3.969-1.084-1.003,.203-1.883,.718-2.534,1.464-.039-.044-.079-.088-.12-.132-.84-.884-1.974-1.389-3.193-1.42-1.211-.026-2.378,.414-3.262,1.253-1.825,1.734-1.9,4.63-.163,6.459l5.479,5.694c.332,.346,.78,.537,1.26,.537h0c.232,0,.456-.047,.664-.132-.408-.407-.661-.97-.661-1.591Z"
          fill={fill}
        />
        <path
          d="M16.25,11.5h-5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Heart2List;
