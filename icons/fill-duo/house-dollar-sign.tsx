import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDollarSign({
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
          d="m15.3096,5.353l-5.25-3.9897c-.624-.4746-1.4951-.4731-2.1191-.0005l-5.25,3.9902v.0005c-.4326.3291-.6904.8496-.6904,1.3926v7.5039c0,1.5166,1.2334,2.75,2.75,2.75h8.5c1.5166,0,2.75-1.2334,2.75-2.75v-7.5039c0-.543-.2578-1.0635-.6904-1.3931Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m9.7959,9.2505h-1.5918c-.2754,0-.5-.2246-.5-.5005s.2246-.5.5-.5h2.6143c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-1.0684c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75h-.0459c-1.1025,0-2,.897-2,2s.8975,2.0005,2,2.0005h1.5918c.2754,0,.5.2241.5.4995,0,.2759-.2246.5-.5.5h-2.6143c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.0684c0,.4141.3359.75.75.75s.75-.3359.75-.75h.0459c1.1025,0,2-.897,2-2s-.8975-1.9995-2-1.9995Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default HouseDollarSign;
