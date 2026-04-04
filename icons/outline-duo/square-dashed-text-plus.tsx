import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedTextPlus({
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
          d="m7.75,13.25c0-3.0327,2.4678-5.5,5.5-5.5.6122,0,1.1995.105,1.75.2905v-3.2905c0-.9666-.7835-1.75-1.75-1.75H4.75c-.9665,0-1.75.7834-1.75,1.75v8.5c0,.9666.7835,1.75,1.75,1.75h3.2904c-.1855-.5505-.2904-1.1377-.2904-1.75Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m6,6.25h6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6,9.25h2.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.25,9.25c-2.2056,0-4,1.7944-4,4s1.7944,4,4,4,4-1.7944,4-4-1.7944-4-4-4Zm1.75,4.75h-1v1c0,.4141-.3359.75-.75.75s-.75-.3359-.75-.75v-1h-1c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h1v-1c0-.4141.3359-.75.75-.75s.75.3359.75.75v1h1c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.25,2.75h2c1.105,0,2,.895,2,2v2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.75,15.25h-2c-1.105,0-2-.895-2-2v-2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m2.75,6.75v-2c0-1.105.895-2,2-2h2"
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

export default SquareDashedTextPlus;
