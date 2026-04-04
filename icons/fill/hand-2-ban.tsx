import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand2Ban({
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
          d="M8.5,14c0-3.033,2.468-5.5,5.5-5.5,.706,0,1.379,.139,2,.382V4.25c0-.552-.448-1-1-1s-1,.448-1,1v3.25c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V2.75c0-.552-.448-1-1-1s-1,.448-1,1V7.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V1.5c0-.552-.448-1-1-1s-1,.448-1,1V7.5c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V2.75c0-.552-.448-1-1-1s-1,.448-1,1v7.833l-1.688-2.021c-.426-.543-1.215-.635-1.755-.211-.54,.424-.604,1.131-.211,1.755l1.603,2.392c1.273,1.751,2.175,4.501,6.05,4.501h.396c-.565-.864-.896-1.893-.896-3Z"
          fill={fill}
        />
        <path
          d="M14,10c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,1.5c.416,0,.802,.112,1.147,.292l-3.355,3.356c-.18-.345-.292-.732-.292-1.148,0-1.378,1.121-2.5,2.5-2.5Zm0,5c-.416,0-.802-.112-1.147-.292l3.355-3.356c.18,.345,.292,.732,.292,1.148,0,1.378-1.121,2.5-2.5,2.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Hand2Ban;
