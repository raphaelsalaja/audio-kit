import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Microsoft({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M3,3H15.381V15.381H3V3Z" />
        <path d="M16.619,3h12.381V15.381h-12.381V3Z" />
        <path d="M3,16.619H15.381v12.381H3v-12.381Z" />
        <path d="M16.619,16.619h12.381v12.381h-12.381v-12.381Z" />
      </g>
    </svg>
  );
}

export default Microsoft;
