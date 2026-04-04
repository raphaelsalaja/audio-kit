import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBackToBottomLeft({
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
          d="M13.75 14H4.008C3.594 14 3.258 13.664 3.258 13.25C3.258 12.836 3.594 12.5 4.008 12.5H13.75C14.439 12.5 15 11.939 15 11.25V5.75C15 5.061 14.439 4.5 13.75 4.5H4.25C3.561 4.5 3 5.061 3 5.75V8.75C3 9.164 2.664 9.5 2.25 9.5C1.836 9.5 1.5 9.164 1.5 8.75V5.75C1.5 4.233 2.733 3 4.25 3H13.75C15.267 3 16.5 4.233 16.5 5.75V11.25C16.5 12.767 15.267 14 13.75 14Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.74999 16.985C6.55799 16.985 6.36599 16.912 6.21999 16.765L3.22799 13.772C2.93499 13.479 2.93499 13.004 3.22799 12.711L6.21999 9.71899C6.51299 9.42599 6.98799 9.42599 7.28099 9.71899C7.57399 10.012 7.57399 10.487 7.28099 10.78L4.81899 13.242L7.28099 15.704C7.57399 15.997 7.57399 16.472 7.28099 16.765C7.13499 16.911 6.94199 16.985 6.74999 16.985Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowBackToBottomLeft;
