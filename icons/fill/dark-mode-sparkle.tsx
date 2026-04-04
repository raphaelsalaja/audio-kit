import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DarkModeSparkle({
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
          d="m4,9c0,2.761,2.239,5,5,5V4c-2.761,0-5,2.239-5,5Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1c.4141,0,.7607.3364.7607.7505,0,.4316-.3936.7871-.8008.748-3.5439.0015-6.46,2.9175-6.46,6.5015s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5c0-.4141.335-.7607.749-.7607.415,0,.75.3252.75.7393.001,4.4326-3.5879,8.0215-7.999,8.0215Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.4873,3.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DarkModeSparkle;
