import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Typography2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m7.75,10h-1V1.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75v8.75h-1c-.414,0-.75.336-.75.75s.336.75.75.75h3.5c.414,0,.75-.336.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m10.751,3.25c-.255,0-.504-.13-.645-.364l-.531-.886H2.425l-.531.886c-.213.354-.673.471-1.029.257-.355-.213-.471-.674-.258-1.029l.75-1.25c.136-.226.38-.364.644-.364h8c.264,0,.508.138.644.364l.75,1.25c.213.355.098.816-.258,1.029-.121.073-.254.107-.385.107Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Typography2;
