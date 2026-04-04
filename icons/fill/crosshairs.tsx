import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs({
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
        <circle cx="9" cy="9" fill={secondaryfill} r="3" />
        <path
          d="M17,8.25h-.789c-.351-3.4-3.061-6.11-6.461-6.461v-.789c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.789c-3.4,.351-6.11,3.061-6.461,6.461h-.789c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.789c.351,3.4,3.061,6.11,6.461,6.461v.789c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-.789c3.4-.351,6.11-3.061,6.461-6.461h.789c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Zm-8,6.5c-3.17,0-5.75-2.58-5.75-5.75S5.83,3.25,9,3.25s5.75,2.58,5.75,5.75-2.58,5.75-5.75,5.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Crosshairs;
