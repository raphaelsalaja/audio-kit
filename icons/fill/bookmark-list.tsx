import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkList({
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
          d="m16.75,3h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.75,6h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m12.25,10.5c-1.2407,0-2.25-1.0093-2.25-2.25,0-.5784.2254-1.1011.5852-1.5-.3598-.3989-.5852-.9216-.5852-1.5s.2254-1.1011.5852-1.5c-.3598-.3989-.5852-.9216-.5852-1.5,0-.2642.0541-.5142.1382-.75h-5.3882c-1.5166,0-2.75,1.2334-2.75,2.75v11.5c0,.2827.1592.542.4116.6694.252.1279.5552.1025.7832-.0654l4.3052-3.1724,4.3052,3.1724c.1313.0967.2876.146.4448.146.1152,0,.2314-.0264.3384-.0806.2524-.1274.4116-.3867.4116-.6694v-5.25h-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m16.75,9h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BookmarkList;
