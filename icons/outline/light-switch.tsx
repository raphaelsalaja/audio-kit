import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LightSwitch({
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
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.75"
          x2="12.25"
          y1="8.75"
          y2="8.75"
        />
        <path
          d="M13.144,14.36l-.289,1.136c-.113,.443-.512,.754-.969,.754h-2.886s-2.886,0-2.886,0c-.457,0-.856-.31-.969-.754l-.289-1.136"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25,1.75h5.5c.276,0,.5,.224,.5,.5v6.5l.899,5.418c.051,.305-.184,.582-.493,.582H5.344c-.309,0-.544-.277-.493-.582l.899-5.418V2.25c0-.276,.224-.5,.5-.5Z"
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

export default LightSwitch;
