import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label32({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m8.695,1.592c-.332-.376-.811-.592-1.312-.592H2.75C1.233,1,0,2.233,0,3.75v4.5c0,1.517,1.233,2.75,2.75,2.75h4.632c.502,0,.98-.216,1.312-.592l2.868-3.25c.583-.66.583-1.655,0-2.315l-2.868-3.25Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Label32;
