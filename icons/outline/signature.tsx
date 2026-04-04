import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Signature({
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
          d="M2.75,5.25H7.75c.552,0,1,.448,1,1v3.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.995,16.25c1.914-3.398,2.933-4.274,3.491-4.099,.895,.279,.635,3.275,1.583,3.45,.699,.129,1.318-1.41,2.07-1.218,.607,.155,.57,1.249,1.258,1.461,.276,.085,.574,0,.853-.156"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25,12.5c0,2-1.75,3.75-1.75,3.75,0,0-1.75-1.75-1.75-3.75V3.5c0-.966,.784-1.75,1.75-1.75h0c.966,0,1.75,.784,1.75,1.75V12.5Z"
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

export default Signature;
