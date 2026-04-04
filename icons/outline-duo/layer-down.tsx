import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerDown({
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
          d="M2.665 6.94999L8.552 3.87998C8.842 3.72898 9.188 3.72896 9.478 3.88096L15.337 6.94999C15.871 7.23099 15.871 7.99596 15.337 8.27696L9.46701 11.368C9.17501 11.522 8.82701 11.522 8.53501 11.368L2.665 8.27696C2.131 7.99596 2.131 7.23099 2.665 6.94999Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M12 10.0448L15.335 8.28902C15.869 8.00802 15.869 7.243 15.335 6.962L9.46501 3.87099C9.17301 3.71699 8.82501 3.71699 8.53301 3.87099L2.66301 6.962C2.12901 7.243 2.12901 8.00802 2.66301 8.28902L6.00002 10.0466"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 8V16"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.5 13.75L9 16.25L6.5 13.75"
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

export default LayerDown;
