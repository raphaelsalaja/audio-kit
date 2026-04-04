import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgSleep({
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
          d="m7.25,7.25h3.5l-3.5,4h3.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.75,1.75h2.5l-2.5,3h2.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.7805,1.9795c-.5707-.1445-1.1649-.2295-1.7805-.2295C4.996,1.75,1.75,4.9961,1.75,9c0,1.3188.358,2.552.973,3.6169.43.8059-.053,2.7122-.973,3.6331,1.25.0679,2.897-.4971,3.633-.9731.489.2822,1.264.6562,2.279.8481.433.082.881.125,1.338.125,4.004,0,7.25-3.2461,7.25-7.25,0-.4272-.0442-.8433-.1151-1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MsgSleep;
