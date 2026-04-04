import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PlugSensor({
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
          d="M5.995,5.995c1.657-1.657,4.353-1.657,6.01,0"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.728,13.433c.951-1.227,1.522-2.761,1.522-4.433,0-4.004-3.246-7.25-7.25-7.25S1.75,4.996,1.75,9c0,1.672,.571,3.207,1.522,4.433"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25,12.25v.75c0,1.795-1.455,3.25-3.25,3.25h0c-1.795,0-3.25-1.455-3.25-3.25v-.75c0-.276,.224-.5,.5-.5h5.5c.276,0,.5,.224,.5,.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="7.25"
          x2="7.25"
          y1="11.75"
          y2="9"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="10.75"
          y1="11.75"
          y2="9"
        />
      </g>
    </svg>
  );
}

export default PlugSensor;
