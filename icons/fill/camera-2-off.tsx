import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Camera2Off({
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
          d="M6.75,2h-2.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M12.903,8.279c.058,.232,.097,.471,.097,.721,0,1.657-1.343,3-3,3-.25,0-.489-.04-.721-.097l-3.097,3.097H14.25c1.517,0,2.75-1.233,2.75-2.75V5.75c0-.453-.121-.875-.316-1.252l-3.781,3.781Z"
          fill={fill}
        />
        <path
          d="M3.089,14.911l4.356-4.356c-.277-.455-.446-.983-.446-1.554,0-1.657,1.343-3,3-3,.571,0,1.1,.168,1.554,.446l3.356-3.356c-.213-.053-.432-.089-.661-.089H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.288,.893,2.363,2.089,2.661Zm.911-9.911c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Z"
          fill={fill}
        />
        <path
          d="M2,16.75c-.192,0-.384-.073-.53-.22-.293-.293-.293-.768,0-1.061L15.47,1.47c.293-.293,.768-.293,1.061,0s.293,.768,0,1.061L2.53,16.53c-.146,.146-.338,.22-.53,.22Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Camera2Off;
