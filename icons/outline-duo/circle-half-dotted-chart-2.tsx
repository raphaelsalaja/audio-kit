import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleHalfDottedChart2({
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
          d="m9,1.75C4.996,1.75,1.75,4.9961,1.75,9s3.246,7.25,7.25,7.25,7.25-3.2461,7.25-7.25S13.004,1.75,9,1.75Zm3.25,10.5h-6.5v-3c0-.2761.2239-.5.5-.5h2.25c.2761,0,.5.2239.5.5v-3c0-.2761.2239-.5.5-.5h2.25c.2761,0,.5.2239.5.5v6Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9,1.75c4.004,0,7.25,3.246,7.25,7.25s-3.246,7.25-7.25,7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.5,5.75h2.25c.276,0,.5.224.5.5v6h-3.25v-6c0-.276.224-.5.5-.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,8.75h2.25c.276,0,.5.224.5.5v3h-3.25v-3c0-.276.224-.5.5-.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="3.873" cy="14.127" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="1.75" cy="9" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="3.873" cy="3.873" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="15.698" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="11.774" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="2.302" cy="6.226" fill={fill} r=".75" strokeWidth="0" />
        <circle cx="6.226" cy="2.302" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default CircleHalfDottedChart2;
