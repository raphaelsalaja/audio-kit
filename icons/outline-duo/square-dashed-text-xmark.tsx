import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareDashedTextXmark({
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
          d="m10.4216,10.4216c-1.5596,1.5596-1.5596,4.0973,0,5.6569s4.0973,1.5596,5.6569,0,1.5596-4.0973,0-5.6569-4.0973-1.5596-5.6569,0Zm4.8462,1.8713l-.9571.9571.9571.9571c.2928.2928.2928.7679,0,1.0607s-.7679.2928-1.0607,0l-.9571-.9571-.9571.9571c-.2928.2928-.7679.2928-1.0607,0s-.2928-.7679,0-1.0607l.9571-.9571-.9571-.9571c-.2928-.2928-.2928-.7679,0-1.0607s.7679-.2928,1.0607,0l.9571.9571.9571-.9571c.2928-.2928.7679-.2928,1.0607,0s.2928.7679,0,1.0607Z"
          fill={fill}
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

export default SquareDashedTextXmark;
