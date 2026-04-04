import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CheckBoxArrow({
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
          d="m7.5996,12.7119h-.0029c-.2803-.001-.5361-.1582-.6641-.4072-.5742-1.1172-1.2168-2.0254-1.9639-2.7754-.293-.2939-.291-.7686.002-1.061.2939-.292.7686-.2905,1.0605.0024.5742.5767,1.0908,1.228,1.5645,1.9727,1.2393-2.0454,2.7344-3.7261,4.457-5.0063.332-.2466.8027-.1777,1.0488.1548.2471.332.1787.8022-.1543,1.0493-1.8574,1.3813-3.4336,3.2886-4.6836,5.6694-.1299.2471-.3857.4014-.6641.4014Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m15.25,11.75c.4141,0,.75-.3359.75-.75v-6.25c0-1.5166-1.2334-2.75-2.75-2.75H4.75c-1.5166,0-2.75,1.2334-2.75,2.75v8.5c0,1.5166,1.2334,2.75,2.75,2.75h8.6895l-.7197.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l2-2c.293-.293.293-.7676,0-1.0605l-2-2c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l.7197.7197H4.75c-.6895,0-1.25-.5605-1.25-1.25V4.75c0-.6895.5605-1.25,1.25-1.25h8.5c.6895,0,1.25.5605,1.25,1.25v6.25c0,.4141.3359.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CheckBoxArrow;
