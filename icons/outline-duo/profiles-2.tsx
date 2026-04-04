import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Profiles2({
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
          d="m13.75,5.25h-6.5c-1.105,0-2,.895-2,2v6.5c0,1.105.895,2,2,2h6.5c1.105,0,2-.895,2-2v-6.5c0-1.105-.895-2-2-2Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.75,5.25h-6.5c-1.105,0-2,.895-2,2v6.5c0,1.105.895,2,2,2h6.5c1.105,0,2-.895,2-2v-6.5c0-1.105-.895-2-2-2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.4012,2.75c-.399-.6885-1.1861-1.1016-2.0212-.9771l-6.924,1.0291c-1.092.1619-1.846,1.179-1.684,2.272l.978,6.5808"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.75,11c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.25,11c.552,0,1-.4477,1-1s-.448-1-1-1-1,.4477-1,1,.448,1,1,1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.3695,11.8237c.7156.1717,1.4592.1786,2.2344-.0001.3429-.079.6631.1762.6431.5275-.0524.919-.8151,1.6489-1.7471,1.6489-.9221,0-1.6783-.7142-1.7452-1.6193-.0252-.341.2823-.6367.6148-.5569Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Profiles2;
