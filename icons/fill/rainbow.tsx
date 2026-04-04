import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Rainbow({
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
          d="M11,14c-.414,0-.75-.336-.75-.75v-1c0-.689-.561-1.25-1.25-1.25s-1.25,.561-1.25,1.25v1c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-1.517,1.233-2.75,2.75-2.75s2.75,1.233,2.75,2.75v1c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M13.75,14c-.414,0-.75-.336-.75-.75v-1c0-2.206-1.794-4-4-4s-4,1.794-4,4v1c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-3.033,2.467-5.5,5.5-5.5s5.5,2.467,5.5,5.5v1c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M16.5,14c-.414,0-.75-.336-.75-.75v-1c0-3.722-3.028-6.75-6.75-6.75s-6.75,3.028-6.75,6.75v1c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1C.75,7.701,4.451,4,9,4s8.25,3.701,8.25,8.25v1c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Rainbow;
