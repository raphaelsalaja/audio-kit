import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileCircuit({
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
          d="m11.75,1h-6.5c-1.5166,0-2.75,1.2334-2.75,2.75v10.5c0,1.5166,1.2334,2.75,2.75,2.75h4.3677c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-4.3677c-.6895,0-1.25-.5605-1.25-1.25V3.75c0-.6895.5605-1.25,1.25-1.25h1v.25c0,.4141.3359.75.75.75h3c.4141,0,.75-.3359.75-.75v-.25h1c.6733,0,1.2197.5303,1.2437,1.207.0146.4136.3315.7505.7764.7227.4136-.0146.7373-.3623.7227-.7764-.0527-1.4878-1.2578-2.6533-2.7427-2.6533Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15,6.25c-.8372,0-1.5535.5183-1.8512,1.25h-3.3988c-.4141,0-.75.3359-.75.75s.3359.75.75.75h3.3988c.2977.7317,1.014,1.25,1.8512,1.25,1.1027,0,2-.8972,2-2s-.8973-2-2-2Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m14,12.5c-.2768,0-.5405.0566-.7805.1589l-1.1462-1.1462c-.3306-.3306-.77-.5127-1.2373-.5127h-1.0859c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.0859c.0669,0,.1294.0259.1768.0732l1.1462,1.1462c-.1022.24-.1589.5037-.1589.7805,0,1.1028.8973,2,2,2s2-.8972,2-2-.8973-2-2-2Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MobileCircuit;
