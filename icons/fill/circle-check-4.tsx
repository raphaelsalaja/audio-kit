import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheck4({
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
          d="m6,0C2.691,0,0,2.691,0,6s2.691,6,6,6,6-2.691,6-6S9.309,0,6,0Zm2.853,4.45l-3.003,4c-.13.174-.329.282-.546.298-.019.001-.036.002-.054.002-.198,0-.389-.078-.53-.219l-1.503-1.5c-.293-.292-.293-.768,0-1.061s.768-.294,1.062,0l.892.89,2.484-3.31c.248-.331.718-.4,1.05-.149.331.249.398.719.149,1.05Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleCheck4;
