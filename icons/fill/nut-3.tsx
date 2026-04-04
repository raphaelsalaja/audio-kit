import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut3({
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
          d="m11.695,4.862l-1.865-3.23c-.404-.698-1.155-1.132-1.959-1.132h-3.742c-.804,0-1.555.434-1.959,1.133L.305,4.862c-.405.702-.405,1.574,0,2.275l1.865,3.23c.404.698,1.155,1.132,1.959,1.132h3.742c.804,0,1.555-.434,1.959-1.133l1.865-3.229c.405-.702.405-1.574,0-2.275Zm-5.695,3.138c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Nut3;
