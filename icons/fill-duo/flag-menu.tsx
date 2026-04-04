import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlagMenu({
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
          d="m7.7445,9.8506c.3704-.2173.7958-.3506,1.2555-.3506.5651,0,1.0809.1953,1.5.5127.4191-.3174.9349-.5127,1.5-.5127s1.0809.1953,1.5.5127c.4191-.3174.9349-.5127,1.5-.5127V3.24c0-.2791-.155-.5359-.402-.665-.247-.1289-.545-.1101-.776.0491-1,.6948-1.928.9839-2.738.8589-.658-.1011-1.109-.4438-1.631-.8408-.598-.4551-1.274-.9702-2.307-1.1282-1.004-.155-2.06.0969-3.146.7051v8.261c.06-.022.125-.0249.179-.062.999-.6951,1.923-.9849,2.738-.8589.3132.0481.5781.1538.8275.2915Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m3.75,1.25c.4142,0,.75.3358.75.75v14c0,.4142-.3358.75-.75.75s-.75-.3358-.75-.75V2c0-.4142.3358-.75.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m12,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m15,13c-.5513,0-1-.4482-1-1s.4487-1,1-1,1,.4482,1,1-.4487,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default FlagMenu;
