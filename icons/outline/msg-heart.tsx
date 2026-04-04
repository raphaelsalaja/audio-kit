import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgHeart({
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
          d="M16.2289 8.58279C16.0116 4.77399 12.8631 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.108 11.552 2.723 12.6169C3.153 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C7.9422 16.178 8.2302 16.2083 8.5212 16.2275"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.781 17.197C13.919 17.268 14.08 17.268 14.218 17.197C14.947 16.823 17.249 15.467 17.249 13.263C17.253 12.295 16.458 11.506 15.472 11.5C14.879 11.507 14.328 11.801 13.999 12.286C13.67 11.802 13.118 11.508 12.526 11.5C11.541 11.506 10.746 12.294 10.749 13.263C10.749 15.468 13.053 16.823 13.781 17.197Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MsgHeart;
