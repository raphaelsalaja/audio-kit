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
          d="M13.25 2H4.75C3.233 2 2 3.23 2 4.75V13.25C2 14.77 3.231 16 4.75 16H8.0147C8.4287 16 8.7647 15.66 8.7647 15.25C8.7647 14.84 8.4287 14.5 8.0147 14.5H6.5V8H3.5V6.5H6.5V3.5H8V6.5H14.5V8.02063C14.5 8.43053 14.836 8.77063 15.25 8.77063C15.664 8.77063 16 8.43053 16 8.02063V4.75C16 3.23 14.769 2 13.25 2Z"
          fill={fill}
        />
        <path
          d="M16.4873 12.5601L14.5928 11.92L13.9615 10.0302C13.8594 9.72005 13.5728 9.52014 13.2501 9.52014C12.9274 9.52014 12.6407 9.72015 12.5387 10.0302L11.9074 11.92L10.0129 12.5601C9.70675 12.6601 9.50024 12.94 9.50024 13.2701C9.50024 13.59 9.70675 13.8801 10.0129 13.9801L11.9074 14.6101L12.5387 16.5001C12.6408 16.8102 12.9274 17.0201 13.2501 17.0201C13.5728 17.0201 13.8595 16.8101 13.9615 16.5001L14.5928 14.6101L16.4873 13.9801C16.7935 13.8801 17 13.5901 17 13.2701C17 12.94 16.7935 12.6601 16.4873 12.5601Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default TableSparkle;
