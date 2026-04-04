import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectSpeaker({
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
          d="M7.25,9.5c0-.966,.784-1.75,1.75-1.75s1.75,.784,1.75,1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.106,11.889c.409-.702,.644-1.518,.644-2.389,0-2.623-2.127-4.75-4.75-4.75-2.623,0-4.75,2.127-4.75,4.75,0,.871,.234,1.687,.644,2.389"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3,14.405c-1.094-1.336-1.75-3.044-1.75-4.905C1.25,5.22,4.72,1.75,9,1.75s7.75,3.47,7.75,7.75c0,1.861-.656,3.569-1.75,4.905"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.569,11.664l2.869,3.348c.417,.487,.071,1.238-.569,1.238H6.131c-.641,0-.986-.752-.569-1.238l2.869-3.348c.299-.349,.84-.349,1.139,0Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default SelectSpeaker;
