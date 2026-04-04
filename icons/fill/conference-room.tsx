import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ConferenceRoom({
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
        <rect
          height="15"
          width="8"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="5"
          y="1.5"
        />
        <circle cx="2.25" cy="9" fill={secondaryfill} r="1.25" />
        <circle cx="2.25" cy="4.25" fill={secondaryfill} r="1.25" />
        <circle cx="2.25" cy="13.75" fill={secondaryfill} r="1.25" />
        <circle cx="15.75" cy="9" fill={secondaryfill} r="1.25" />
        <circle cx="15.75" cy="4.25" fill={secondaryfill} r="1.25" />
        <circle cx="15.75" cy="13.75" fill={secondaryfill} r="1.25" />
      </g>
    </svg>
  );
}

export default ConferenceRoom;
