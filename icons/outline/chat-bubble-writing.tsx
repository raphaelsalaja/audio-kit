import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChatBubbleWriting({
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
          d="M13.75,2.75H4.25c-1.105,0-2,.895-2,2v11.5l3.75-3h7.75c1.105,0,2-.895,2-2V4.75c0-1.105-.895-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,9c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
          fill={secondaryfill}
          opacity=".75"
          stroke="none"
        />
        <path
          d="M5.5,9c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.5,9c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
          fill={secondaryfill}
          opacity=".5"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ChatBubbleWriting;
