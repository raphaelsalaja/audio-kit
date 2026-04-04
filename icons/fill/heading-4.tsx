import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading4({
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
          d="M15,14c-.414,0-.75-.336-.75-.75v-1.75h-4c-.414,0-.75-.336-.75-.75v-.109c0-.171,.059-.337,.166-.471l4.75-5.891c.201-.247,.536-.342,.833-.236,.3,.105,.5,.389,.5,.707v5.25h.94c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-.94v1.75c0,.414-.336,.75-.75,.75Zm-4.75-3.359h0Zm1.48-.641h2.52v-3.125l-2.52,3.125Z"
          fill={secondaryfill}
        />
        <path
          d="M7.75,4c-.414,0-.75,.336-.75,.75v3.5H2.5v-3.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75V13.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-3.5H7v3.5c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V4.75c0-.414-.336-.75-.75-.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heading4;
