import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBot({
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
          d="M15.75,.75h-4.5c-.827,0-1.5,.673-1.5,1.5v2c0,.827,.673,1.5,1.5,1.5h.5v2l2.227-2h1.773c.827,0,1.5-.673,1.5-1.5V2.25c0-.827-.673-1.5-1.5-1.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25,8.25v6c0,1.105-.895,2-2,2H3.75c-1.105,0-2-.895-2-2v-5.5c0-1.105,.895-2,2-2h4.38"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.5,12h2c.276,0,.5,.224,.5,.5h0c0,.828-.672,1.5-1.5,1.5h0c-.828,0-1.5-.672-1.5-1.5h0c0-.276,.224-.5,.5-.5Z"
          fill={fill}
          stroke="none"
        />
        <circle cx="5.5" cy="11" fill={fill} r="1" stroke="none" />
        <circle cx="11.5" cy="11" fill={fill} r="1" stroke="none" />
        <circle cx="5.25" cy="2.5" fill={fill} r="1.5" stroke="none" />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="5.25"
          y1="3.75"
          y2="6.75"
        />
      </g>
    </svg>
  );
}

export default ChatBot;
