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
          d="m16.4873,4.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m16.25,14.5h-6.5706l3.3284-3.3291c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2.0607,2.061-4.2729-4.2727,2.1998-2.1995c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0L1.6943,9.6963c-.4253.4248-.6597.9897-.6597,1.5908s.2339,1.1665.6592,1.5913l2.9019,2.9019c.1406.1406.3315.2197.5303.2197h2.7432c.0228,0,.0434-.011.0659-.0132.0225.002.0419.0132.0649.0132h8.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default EraserSparkle;
