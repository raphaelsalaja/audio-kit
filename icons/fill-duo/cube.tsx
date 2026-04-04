import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cube({
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
          d="M2 6.52689V11.4732C2 12.4503 2.5254 13.3619 3.3706 13.8521L7.6211 16.3169C8.0463 16.5635 8.5231 16.6863 9 16.6865V8.99999L2.3664 5.15939C2.131 5.56979 2 6.04009 2 6.52689Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16 6.52689V11.4732C16 12.4503 15.4746 13.3619 14.6294 13.8521L10.3789 16.3169C9.9537 16.5635 9.4769 16.6863 9 16.6865V8.99999L15.6336 5.15939C15.869 5.56979 16 6.04009 16 6.52689Z"
          fill={fill}
        />
        <path
          d="M9 9L15.6343 5.1589C15.3972 4.7461 15.0543 4.3938 14.6303 4.1479L10.3798 1.6831C9.5292 1.1899 8.4716 1.1899 7.621 1.6831L3.3705 4.1479C2.9464 4.394 2.6034 4.7463 2.3663 5.1594L9 9Z"
          fill={secondaryfill}
          opacity="0.2"
        />
      </g>
    </svg>
  );
}

export default Cube;
