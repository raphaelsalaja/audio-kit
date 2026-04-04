import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UnicornHead({
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
        <polygon
          fill={fill}
          points="6.1565 5.9218 2.75 1.7514 7.3726 4.8893 6.1565 5.9218"
          strokeWidth="0"
        />
        <polygon
          fill="none"
          points="6.1565 5.9218 2.75 1.7514 7.3726 4.8893 6.1565 5.9218"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.1638,12.2461c-1.823.0752-3.0368-.9776-4.327-.5671l-1.1427.4073c-.6721.2182-1.397-.131-1.6452-.7927l-.2098-.5592c-.1954-.5209-.0436-1.1084.3797-1.4694l5.7812-4.9084-.4375-2.6052c2.6562.0923,5.9823,1.0079,7.7344,4.2486,2.0781,3.8438.1523,9.75-.2969,11H6.75c.4108-1.6931,1.6735-2.702,2.4138-4.7539Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m12.0394,10.2311s-.5866,1.7484-2.5082,1.9849c-2.0312.25-3.3194-.9744-4.6944-.5369l-1.1427.4073c-.6721.2182-1.397-.131-1.6452-.7927l-.2098-.5592c-.1954-.5209-.0436-1.1084.3797-1.4694l5.7812-4.9084-.4375-2.6052c2.6562.0923,5.9823,1.0079,7.7344,4.2486,2.0781,3.8438.1523,9-.2969,10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.1639,12.2453c-.7264,2.0023-1.8305,2.0023-2.4139,4.0047"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle cx="8.5" cy="7.5" fill={fill} r="1" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default UnicornHead;
