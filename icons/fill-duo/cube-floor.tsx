import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CubeFloor({
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
          d="M3.327 4.2876C3.1169 4.6516 3 5.0691 3 5.501V9.6558C3 10.5196 3.46391 11.3252 4.21091 11.7579L7.7812 13.8292C8.1572 14.047 8.5781 14.1559 9 14.1559V7.5783L3.327 4.2876Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 14.1558C9.4219 14.1558 9.8428 14.0469 10.2188 13.8291L13.7901 11.7573C14.5362 11.3237 15.0001 10.518 15.0001 9.65569V5.50089C15.0001 5.06879 14.8836 4.65099 14.6737 4.28729L9.00011 7.57809L9 14.1558Z"
          fill={secondaryfill}
        />
        <path
          d="M9 7.5781L14.6736 4.2873C14.4642 3.9248 14.1621 3.6154 13.7891 3.3989L10.2198 1.3286C9.4678 0.891098 8.5323 0.891098 7.7803 1.3286L4.21001 3.3999C3.83781 3.6165 3.5362 3.9255 3.327 4.2876L9 7.5781Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M9 17C6.0283 17 1 16.4209 1 14.25C1 13.5059 1.5781 12.894 2.7188 12.4316C3.0997 12.2758 3.5401 12.4609 3.6954 12.8452C3.8507 13.229 3.6661 13.6665 3.2813 13.8223C2.8389 14.0015 2.62109 14.1636 2.53419 14.2535C2.90529 14.6676 5.041 15.5001 9 15.5001C12.959 15.5001 15.0947 14.6676 15.4658 14.2535C15.3789 14.1637 15.1611 14.0015 14.7187 13.8223C14.3339 13.6665 14.1494 13.229 14.3046 12.8452C14.4599 12.4609 14.8993 12.2764 15.2812 12.4316C16.4218 12.894 17 13.5058 17 14.25C17 16.4209 11.9717 17 9 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CubeFloor;
