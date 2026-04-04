import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Jewel({
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
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.25"
          x2="2.269"
          y1="6.545"
          y2="4.925"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.545"
          x2="4.925"
          y1="5.247"
          y2="2.269"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.455"
          x2="13.075"
          y1="5.25"
          y2="2.269"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.753"
          x2="15.731"
          y1="6.545"
          y2="4.925"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="12.75"
          x2="15.731"
          y1="11.455"
          y2="13.075"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.455"
          x2="13.075"
          y1="12.753"
          y2="15.731"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="6.545"
          x2="4.925"
          y1="12.75"
          y2="15.731"
        />
        <line
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="5.247"
          x2="2.269"
          y1="11.455"
          y2="13.075"
        />
        <polygon
          fill="none"
          points="6.545 12.75 5.25 11.455 5.25 6.545 6.545 5.25 11.455 5.25 12.75 6.545 12.75 11.455 11.455 12.75 6.545 12.75"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.412,15.457l-1.869-1.869c-.188-.188-.293-.442-.293-.707V5.119c0-.265,.105-.52,.293-.707l1.869-1.869c.188-.188,.442-.293,.707-.293h7.762c.265,0,.52,.105,.707,.293l1.869,1.869c.188,.188,.293,.442,.293,.707v7.762c0,.265-.105,.52-.293,.707l-1.869,1.869c-.188,.188-.442,.293-.707,.293H5.119c-.265,0-.52-.105-.707-.293Z"
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

export default Jewel;
