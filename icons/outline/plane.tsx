import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Plane({
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
          d="M7.25,10.358l-6,.892v-1.574c0-.408,.248-.776,.627-.928l5.373-2.154"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75,10.358l6,.892v-1.574c0-.408-.248-.776-.627-.928l-5.373-2.154"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25,3.5v7.715c0,.522,.041,1.044,.122,1.56l.472,2.987c.09,.569,.58,.988,1.156,.988h0c.576,0,1.066-.419,1.156-.988l.472-2.987c.081-.516,.122-1.037,.122-1.56V3.5c0-.966-.784-1.75-1.75-1.75h0c-.966,0-1.75,.784-1.75,1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.844,15.762l-.357-2.26-2.902,1.332c-.357,.164-.585,.52-.585,.912v.756c0,.296,.256,.526,.55,.496l3.895-.407c-.308-.17-.543-.46-.601-.828Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M10.156,15.762l.357-2.26,2.902,1.332c.357,.164,.585,.52,.585,.912v.756c0,.296-.256,.526-.55,.496l-3.895-.407c.308-.17,.543-.46,.601-.828Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Plane;
