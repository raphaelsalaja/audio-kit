import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedSearchSparkle({
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
          d="m13.25,2h-2c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2c.6895,0,1.25.5605,1.25,1.25v1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.5c0-1.5166-1.2334-2.75-2.75-2.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6.75,14.5h-2c-.6895,0-1.25-.5605-1.25-1.25v-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.5c0,1.5166,1.2334,2.75,2.75,2.75h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15.4873,11.5381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m8.7803,7.7197l-1.2053-1.2053c.2635-.4463.425-.9597.425-1.5144,0-1.6543-1.3457-3-3-3s-3,1.3457-3,3,1.3457,3,3,3c.5547,0,1.0682-.1616,1.5144-.425l1.2053,1.2053c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605Zm-5.2803-2.7197c0-.8271.6729-1.5,1.5-1.5s1.5.6729,1.5,1.5c0,.4126-.1676.7866-.438,1.0579-.0007.0007-.0017.001-.0024.0017s-.0009.0017-.0016.0024c-.2714.2705-.6454.438-1.0579.438-.8271,0-1.5-.6729-1.5-1.5Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SquareDashedSearchSparkle;
