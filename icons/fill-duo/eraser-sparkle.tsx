import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EraserSparkle({
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
          d="m16.25,14.5h-6.5707l1.2677-1.2681-6.3941-6.394-2.8586,2.8584c-.4253.4248-.6597.9897-.6597,1.5908s.2339,1.1665.6592,1.5913l2.9019,2.9019c.1406.1406.3306.2197.5293.2197h2.7441c.0228,0,.0434-.011.0659-.0132.0225.002.0419.0132.0649.0132h8.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.25,10c-.9692,0-1.8271-.6182-2.1343-1.5376l-.3945-1.1836-1.1826-.3936c-.9214-.3086-1.5386-1.1665-1.5386-2.1353,0-.4917.1603-.9541.4371-1.3313-.3806.0938-.7399.2749-1.0255.5608l-2.8587,2.8584,6.3941,6.394,2.8577-2.8584c.1766-.1763.3115-.3811.4191-.5984-.2975.1431-.6277.2249-.9738.2249Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.4873,4.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default EraserSparkle;
