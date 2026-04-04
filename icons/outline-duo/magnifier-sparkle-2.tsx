import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierSparkle2({
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
          d="m11.1157,8.4624l-.3945-1.1836-1.1826-.3936c-.9214-.3086-1.5386-1.1665-1.5386-2.1353,0-.7651.385-1.4611.9996-1.8714.1636-.1092-.5894-.6286-1.2496-.6286-3.0375,0-5.5,2.4624-5.5,5.5s2.4625,5.5,5.5,5.5c2.115,0,3.949-1.195,4.8691-2.9456.0613-.1167.0509-.3851-.0082-.4026-.6914-.2043-1.2582-.7297-1.4952-1.4394Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m15.75,15.75l-4.1114-4.1114"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.5123,2.3088c-.2498-.0347-.5029-.0588-.7623-.0588-3.0375,0-5.5,2.4624-5.5,5.5s2.4625,5.5,5.5,5.5c1.9805,0,3.7113-1.0503,4.6797-2.6208"
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
      </g>
    </svg>
  );
}

export default MagnifierSparkle2;
