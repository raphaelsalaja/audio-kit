import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartBubble({
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
          d="M11.75 15.75C12.7165 15.75 13.5 14.9665 13.5 14C13.5 13.0335 12.7165 12.25 11.75 12.25C10.7835 12.25 10 13.0335 10 14C10 14.9665 10.7835 15.75 11.75 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.25 9.25C14.183 9.25 15.75 7.683 15.75 5.75C15.75 3.817 14.183 2.25 12.25 2.25C10.317 2.25 8.75 3.817 8.75 5.75C8.75 7.683 10.317 9.25 12.25 9.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.5 13.25C5.74264 13.25 6.75 12.2426 6.75 11C6.75 9.75736 5.74264 8.75 4.5 8.75C3.25736 8.75 2.25 9.75736 2.25 11C2.25 12.2426 3.25736 13.25 4.5 13.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 15.75C12.7165 15.75 13.5 14.9665 13.5 14C13.5 13.0335 12.7165 12.25 11.75 12.25C10.7835 12.25 10 13.0335 10 14C10 14.9665 10.7835 15.75 11.75 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 9.25C14.183 9.25 15.75 7.683 15.75 5.75C15.75 3.817 14.183 2.25 12.25 2.25C10.317 2.25 8.75 3.817 8.75 5.75C8.75 7.683 10.317 9.25 12.25 9.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 13.25C5.74264 13.25 6.75 12.2426 6.75 11C6.75 9.75736 5.74264 8.75 4.5 8.75C3.25736 8.75 2.25 9.75736 2.25 11C2.25 12.2426 3.25736 13.25 4.5 13.25Z"
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

export default ChartBubble;
