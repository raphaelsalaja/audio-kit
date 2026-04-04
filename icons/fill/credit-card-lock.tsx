import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardLock({
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
          d="M17,5.75c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v.75H17v-.75Z"
          fill={fill}
        />
        <path
          d="M8,13.75c0-1.129,.597-2.149,1.507-2.732,.08-1.298,.83-2.408,1.901-3.018H1v4.25c0,1.517,1.233,2.75,2.75,2.75h4.25v-1.25Zm-3.75-1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75h-3Z"
          fill={fill}
        />
        <path
          d="M16.993,11.018s.004,.004,.007,.006v-3.023h-1.908c1.071,.609,1.821,1.719,1.901,3.018Z"
          fill={fill}
        />
        <path
          d="M15.5,12.025v-.775c0-1.241-1.01-2.25-2.25-2.25s-2.25,1.009-2.25,2.25v.775c-.846,.123-1.5,.845-1.5,1.725v1.5c0,.965,.785,1.75,1.75,1.75h4c.965,0,1.75-.785,1.75-1.75v-1.5c0-.879-.654-1.602-1.5-1.725Zm-2.25-1.525c.413,0,.75,.336,.75,.75v.75h-1.5v-.75c0-.414,.337-.75,.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CreditCardLock;
