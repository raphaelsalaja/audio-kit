import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleInfoSparkle({
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
          d="M14.25 9C13.2808 9 12.4229 8.38201 12.1157 7.46201L11.7212 6.27901L10.5386 5.88499C9.6172 5.57699 9 4.719 9 3.75C9 3.1802 9.2133 2.6494 9.5757 2.2462C9.6744 2.1364 9.6628 2.0235 9.6333 1.8884C9.1013 1.7634 8.8198 1.74989 8.25 1.74989C4.246 1.74989 1 4.99589 1 8.99989C1 13.0039 4.246 16.2499 8.25 16.2499C12.254 16.2499 15.5 13.0039 15.5 8.99989C15.5 8.87389 15.4984 8.9248 15.4921 8.7998C15.3976 8.8115 15.2982 8.7384 15.2012 8.7843C14.9101 8.9223 14.5877 9 14.25 9Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M17.4873 3.03799L15.5928 2.407L14.9615 0.513C14.8594 0.207 14.5728 0 14.2501 0C13.9274 0 13.6407 0.207 13.5387 0.513L12.9074 2.407L11.0129 3.03799C10.7067 3.14099 10.5002 3.427 10.5002 3.75C10.5002 4.073 10.7067 4.35901 11.0129 4.46201L12.9074 5.093L13.5387 6.987C13.6408 7.293 13.9274 7.5 14.2501 7.5C14.5728 7.5 14.8595 7.293 14.9615 6.987L15.5928 5.093L17.4873 4.46201C17.7935 4.35901 18 4.073 18 3.75C18 3.427 17.7935 3.14099 17.4873 3.03799Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.25 6.75C7.698 6.75 7.25 6.301 7.25 5.75C7.25 5.199 7.698 4.75 8.25 4.75C8.802 4.75 9.25 5.199 9.25 5.75C9.25 6.301 8.802 6.75 8.25 6.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.25 12.75V9.25C8.25 8.9739 8.0261 8.75 7.75 8.75H7"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.9884 1.7917C8.7455 1.7661 8.4999 1.75 8.25 1.75C4.246 1.75 1 4.9961 1 9C1 13.0039 4.246 16.25 8.25 16.25C12.0918 16.25 15.2273 13.2593 15.4758 9.4805"
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

export default CircleInfoSparkle;
