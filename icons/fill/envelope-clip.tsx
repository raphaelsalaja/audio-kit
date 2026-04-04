import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeClip({
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
          d="M14.75 18C12.958 18 11.5 16.542 11.5 14.75V12.25C11.5 11.147 12.397 10.25 13.5 10.25C14.603 10.25 15.5 11.147 15.5 12.25V14.25C15.5 14.664 15.164 15 14.75 15C14.336 15 14 14.664 14 14.25V12.25C14 11.974 13.776 11.75 13.5 11.75C13.224 11.75 13 11.974 13 12.25V14.75C13 15.715 13.785 16.5 14.75 16.5C15.715 16.5 16.5 15.715 16.5 14.75V12.75C16.5 12.336 16.836 12 17.25 12C17.664 12 18 12.336 18 12.75V14.75C18 16.542 16.542 18 14.75 18Z"
          fill={secondaryfill}
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25V12.75C1 14.268 2.23054 15.5 3.75 15.5H9.24609C9.66031 15.5 9.99609 15.1642 9.99609 14.75C9.99609 14.3358 9.66031 14 9.24609 14H3.75C3.061 14 2.5 13.439 2.5 12.75V6.521L8.154 9.641C8.419 9.787 8.71 9.86 9 9.86C9.29 9.86 9.581 9.787 9.846 9.641L15.5 6.521V9.00284C15.5 9.41684 15.836 9.75284 16.25 9.75284C16.664 9.75284 17 9.41684 17 9.00284V5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeClip;
