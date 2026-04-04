import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Half({
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
          d="M16.842,5.366c-.217-.827-.693-1.595-1.342-2.164-1.11-.974-2.56-1.369-3.969-1.084-1.003,.203-1.883,.718-2.534,1.464-.039-.044-.079-.088-.12-.132-.84-.884-1.974-1.389-3.193-1.42-1.188-.033-2.378,.414-3.262,1.254-1.825,1.734-1.9,4.63-.163,6.459l5.479,5.694c.332,.346,.78,.537,1.26,.537h0c.48,0,.928-.19,1.261-.537l5.48-5.694s.003-.002,.004-.004c1.102-1.161,1.512-2.795,1.098-4.373Zm-2.184,3.339l-5.479,5.692c-.064,.066-.139,.076-.18,.076V5.678c.287,0,.548-.164,.674-.422,.422-.868,1.207-1.476,2.154-1.667,.95-.192,1.926,.079,2.684,.742,.425,.373,.737,.876,.879,1.417,.281,1.071,.008,2.177-.732,2.958Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2Half;
