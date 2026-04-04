import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Headphones2({
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
          d="M15.25,10.5c-.414,0-.75-.336-.75-.75v-.75c0-3.033-2.467-5.5-5.5-5.5S3.5,5.967,3.5,9v.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-.75c0-3.86,3.14-7,7-7s7,3.14,7,7v.75c0,.414-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M5.25,16h-1.5c-.965,0-1.75-.785-1.75-1.75v-4.5c0-.414,.336-.75,.75-.75h2.5c.965,0,1.75,.785,1.75,1.75v3.5c0,.965-.785,1.75-1.75,1.75Z"
          fill={fill}
        />
        <path
          d="M14.25,16h-1.5c-.965,0-1.75-.785-1.75-1.75v-3.5c0-.965,.785-1.75,1.75-1.75h2.5c.414,0,.75,.336,.75,.75v4.5c0,.965-.785,1.75-1.75,1.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Headphones2;
