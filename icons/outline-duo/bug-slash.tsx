import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BugSlash({
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
          d="m12.0731,5.9269c-.2511-.1136-.5297-.1769-.8231-.1769h-4.5c-1.104,0-2,.896-2,2v3.25c0,.6568.1492,1.2789.4156,1.8344l6.9075-6.9075Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.9036,14.6972c.6187.3518,1.3342.5528,2.0964.5528,2.346,0,4.25-1.904,4.25-4.25v-2.302l-.5296-.2365-5.9047,5.9384.0879.2972Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6.75,5.75v-1.25c0-1.243,1.007-2.25,2.25-2.25s2.25,1.007,2.25,2.25v1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.169,12.843c-.269-.557-.419-1.182-.419-1.843v-3.25c0-1.105.895-2,2-2h4.5c.293,0,.572.063.823.177"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.75,9.75H1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.75,7.25c-1.519,0-2.75-1.231-2.75-2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,9.75h3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,12.25c1.519,0,2.75,1.231,2.75,2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2,16L16,2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,8.9922v2.0078c0,2.347-1.903,4.25-4.25,4.25h0c-.585,0-1.143-.1181-1.6504-.3324"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="15.25"
          y2="12.75"
        />
      </g>
    </svg>
  );
}

export default BugSlash;
