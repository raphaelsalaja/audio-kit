import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LockOpen({
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
          d="M5.75,9c-.414,0-.75-.336-.75-.75v-3.25c0-2.206,1.794-4,4-4s4,1.794,4,4c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v3.25c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.75,7.5H5.25c-1.517,0-2.75,1.233-2.75,2.75v4c0,1.517,1.233,2.75,2.75,2.75h7.5c1.517,0,2.75-1.233,2.75-2.75v-4c0-1.517-1.233-2.75-2.75-2.75Zm-3,5.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-1c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default LockOpen;
