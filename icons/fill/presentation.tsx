import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Presentation({
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
        <circle cx="4" cy="3" fill={fill} r="2" />
        <path
          d="M13.75,3h-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5c.689,0,1.25,.561,1.25,1.25v5c0,.689-.561,1.25-1.25,1.25h-5c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h2.184l.845,2.956c.094,.33,.395,.544,.721,.544,.068,0,.138-.009,.207-.029,.398-.114,.629-.529,.515-.927l-.727-2.544h1.256c1.517,0,2.75-1.233,2.75-2.75V5.75c0-1.517-1.233-2.75-2.75-2.75Z"
          fill={secondaryfill}
        />
        <path
          d="M11,6.75c0-.414-.336-.75-.75-.75H3.5c-1.105,0-2,.895-2,2v8.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-4.25h1.5v4.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V7.5h4.25c.414,0,.75-.336,.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Presentation;
