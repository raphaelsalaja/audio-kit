import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MediaEject({
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
          d="M4.43,13H13.57c.575,0,1.094-.297,1.388-.795,.296-.503,.304-1.108,.021-1.618L10.409,2.333c-.284-.514-.824-.833-1.409-.833s-1.125,.319-1.409,.833L3.021,10.587c-.282,.51-.274,1.115,.021,1.618,.294,.498,.812,.795,1.388,.795Z"
          fill={fill}
        />
        <path
          d="M14.5,14.5H3.5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75H14.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default MediaEject;
