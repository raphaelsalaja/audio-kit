import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableSparkle({
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
          d="M16.4873 12.54L14.5928 11.91L13.9615 10.01C13.8594 9.71001 13.5728 9.5 13.2501 9.5C12.9274 9.5 12.6407 9.71001 12.5387 10.01L11.9074 11.91L10.0129 12.54C9.70674 12.64 9.50024 12.93 9.50024 13.25C9.50024 13.57 9.70674 13.86 10.0129 13.96L11.9074 14.59L12.5387 16.49C12.6408 16.79 12.9274 17 13.2501 17C13.5728 17 13.8595 16.79 13.9615 16.49L14.5928 14.59L16.4873 13.96C16.7935 13.86 17 13.57 17 13.25C17 12.93 16.7935 12.64 16.4873 12.54Z"
          fill={fill}
        />
        <path d="M6.5 6.5V2H4.75C3.233 2 2 3.23 2 4.75V6.5H6.5Z" fill={fill} />
        <path
          d="M8.0417 14.5H6.5V6.5H2V13.25C2 14.77 3.233 16 4.75 16H8.0417C8.4558 16 8.7917 15.66 8.7917 15.25C8.7917 14.84 8.4558 14.5 8.0417 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.25 2H6.5V6.5H14.5V8.04175C14.5 8.46165 14.8359 8.79175 15.25 8.79175C15.6641 8.79175 16 8.46165 16 8.04175V4.75C16 3.23 14.767 2 13.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TableSparkle;
