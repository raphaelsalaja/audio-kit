import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Helicopter({
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
          d="M16.25,1.5h-6.5v-.5c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v.5H1.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h6.5v1.75c0,.414,.336,.75,.75,.75s.75-.336,.75-.75v-1.75h6.5c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.186,13.055c.054-.053,.117-.096,.168-.154,.617-.699,.904-1.629,.789-2.554l-.375-3c-.203-1.623-1.59-2.847-3.225-2.847h-3.086c-1.635,0-3.022,1.224-3.225,2.847l-.375,3c-.116,.925,.172,1.855,.789,2.554,.051,.058,.114,.1,.168,.154-1.082,.658-1.814,1.838-1.814,3.195,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-1.241,1.009-2.25,2.25-2.25h4.5c1.241,0,2.25,1.009,2.25,2.25,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-1.357-.731-2.537-1.814-3.195Zm-7.649-4.055l.183-1.467c.109-.874,.856-1.533,1.737-1.533h.793v3h-2.713Zm4.213,0v-3h.793c.88,0,1.627,.659,1.737,1.533l.183,1.467h-2.713Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Helicopter;
