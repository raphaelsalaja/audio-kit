import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgPen({
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
          d="M13.7959 16.2042L16.9571 13.043C17.3476 12.6525 17.3476 12.0193 16.9571 11.6288L16.3713 11.043C15.9808 10.6525 15.3476 10.6525 14.9571 11.043L11.7959 14.2042L11.0001 17.0001L13.7959 16.2042Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C7.78695 16.1487 7.93936 16.1895 8.10001 16.2325C8.34859 16.2991 8.61688 16.371 8.83362 16.3927L9.63184 13.5882C9.73672 13.2197 9.93398 12.8841 10.2049 12.6132L13.3661 9.45201C14.0426 8.77555 14.943 8.45963 15.8288 8.50426C16.0633 8.51608 16.0988 8.49852 16.2335 8.50735C15.9803 4.7331 12.8384 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.1431 7.79691C15.5692 4.36671 12.5937 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.10801 11.552 2.72301 12.6169C3.15301 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C7.8094 16.1528 7.9627 16.1643 8.1138 16.1816"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.2042L16.9571 13.043C17.3476 12.6525 17.3476 12.0193 16.9571 11.6288L16.3713 11.043C15.9808 10.6525 15.3476 10.6525 14.9571 11.043L11.7959 14.2042L11.0001 17.0001L13.7959 16.2042Z"
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

export default MsgPen;
