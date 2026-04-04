import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2({
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
          d="M16.842,5.365c-.217-.826-.693-1.595-1.342-2.164-1.11-.974-2.56-1.368-3.969-1.084-1.003,.203-1.883,.718-2.534,1.464-.039-.044-.079-.088-.12-.132-.84-.884-1.974-1.389-3.193-1.42-1.213-.026-2.378,.414-3.262,1.253-1.825,1.734-1.9,4.63-.163,6.459l5.479,5.694c.332,.346,.78,.537,1.26,.537h0c.48,0,.928-.19,1.261-.537l5.48-5.694s.003-.002,.004-.003c1.102-1.161,1.512-2.795,1.098-4.374Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2;
