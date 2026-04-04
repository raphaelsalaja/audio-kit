import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CirclePencil({
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
          d="m6.3431,11.0598c.0911-.4702.5028-.8098.9818-.8098h3.3503c.4789,0,.8906.3396.9818.8098l.8322,4.2949c2.2412-1.2332,3.7609-3.616,3.7609-6.3547,0-4.0042-3.2459-7.25-7.25-7.25S1.75,4.9958,1.75,9c0,2.7388,1.5197,5.1216,3.7609,6.3547l.8322-4.2949Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m12.4891,15.3547l-.8322-4.295c-.0911-.4702-.5028-.8098-.9817-.8098h-3.3504c-.4789,0-.8906.3396-.9817.8098l-.8322,4.295"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="9"
          cy="9"
          fill="none"
          r="7.25"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill={fill}
          points="9 5.5 10.5 10.25 7.5 10.25 9 5.5"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CirclePencil;
