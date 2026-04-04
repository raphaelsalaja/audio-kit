import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowNewTop({
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
          d="M16.0001 13.25C16.0001 14.7666 14.7667 16 13.2501 16H9.00012H4.75012C3.23352 16 2.00012 14.7666 2.00012 13.25V9H9.00012H16.0001V13.25Z"
          fill={fill}
        />
        <path
          d="M4.25012 3.25C4.25012 4.4907 5.25942 5.5 6.50012 5.5H6.75012V5.75C6.75012 6.9907 7.75942 8 9.00012 8C10.2408 8 11.2501 6.9907 11.2501 5.75V5.5H11.5001C12.7408 5.5 13.7501 4.4907 13.7501 3.25C13.7501 2.7928 13.6114 2.36822 13.3761 2.01282C14.8331 2.08032 16.0001 3.2766 16.0001 4.75V9H9.00012H2.00012V4.75C2.00012 3.2766 3.16715 2.08032 4.62415 2.01282C4.38875 2.36822 4.25012 2.7928 4.25012 3.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.75012 0.75V2.5H11.5001C11.9142 2.5 12.2501 2.8359 12.2501 3.25C12.2501 3.6641 11.9142 4 11.5001 4H9.75012V5.75C9.75012 6.1641 9.41422 6.5 9.00012 6.5C8.58602 6.5 8.25012 6.1641 8.25012 5.75V4H6.50012C6.08602 4 5.75012 3.6641 5.75012 3.25C5.75012 2.8359 6.08602 2.5 6.50012 2.5H8.25012V0.75C8.25012 0.3359 8.58602 0 9.00012 0C9.41422 0 9.75012 0.3359 9.75012 0.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowNewTop;
