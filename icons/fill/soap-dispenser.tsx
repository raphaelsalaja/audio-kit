import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoapDispenser({
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
          d="M11,6H7V2.75c0-.966,.784-1.75,1.75-1.75h5.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3.25v3.5Z"
          fill={secondaryfill}
        />
        <path
          d="M13.25,9h-4.5c-.414,0-.75,.336-.75,.75v2.5c0,.414,.336,.75,.75,.75h4.5v-4Z"
          fill={secondaryfill}
        />
        <path
          d="M11.25,17H6.75c-1.517,0-2.75-1.233-2.75-2.75v-5c0-3.086,2.073-4.127,3.169-4.246l3.581-.004c1.173,.114,3.25,1.143,3.25,4.25v5c0,1.517-1.233,2.75-2.75,2.75Zm-.583-10.504l-3.417,.004c-.099,.02-1.75,.308-1.75,2.75v5c0,.689,.561,1.25,1.25,1.25h4.5c.689,0,1.25-.561,1.25-1.25v-5c0-2.457-1.646-2.731-1.833-2.754Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SoapDispenser;
