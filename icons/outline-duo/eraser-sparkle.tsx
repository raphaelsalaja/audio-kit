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
          d="m5.0836,7.3679h0l-2.8596,2.8591c-.586.585-.586,1.5349,0,2.1208l2.902,2.9021h2.743l2.548-2.5486-5.3335-5.3335Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m7.2832,5.1687l-5.0592,5.0583c-.586.585-.586,1.5349,0,2.1208l2.902,2.9021h2.743l4.6084-4.6094"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m16.4873,4.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={fill}
          strokeWidth="0"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="8"
          x2="16.25"
          y1="15.25"
          y2="15.25"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.083"
          x2="10.417"
          y1="7.368"
          y2="12.702"
        />
      </g>
    </svg>
  );
}

export default EraserSparkle;
