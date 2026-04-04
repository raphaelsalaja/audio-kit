import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrController({
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
        <circle cx="9" cy="5" fill={secondaryfill} r="1" strokeWidth="0" />
        <path
          d="m12.25,5c0-1.795-1.455-3.25-3.25-3.25s-3.25,1.455-3.25,3.25c0,1.149.6,2.153,1.5,2.731v6.769c0,.967.784,1.75,1.75,1.75s1.75-.783,1.75-1.75v-6.769c.9-.578,1.5-1.582,1.5-2.731Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.7824,8.4381c-1.2582.4048-2.0324.9551-2.0324,1.5619,0,1.243,3.246,2.25,7.25,2.25s7.25-1.007,7.25-2.25c0-.6067-.7741-1.157-2.0323-1.5618"
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

export default VrController;
