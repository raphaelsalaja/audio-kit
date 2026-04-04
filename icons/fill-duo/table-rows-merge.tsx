import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TableRowsMerge({
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
          d="M16.0001 13.25C16.0001 14.7666 14.7667 16 13.2501 16H4.75012C3.23352 16 2.00012 14.7666 2.00012 13.25V9H9.00012H16.0001V13.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.5304 14.0303L11.7804 11.7803C12.0734 11.4873 12.0734 11.0127 11.7804 10.7198C11.4874 10.4269 11.0128 10.4268 10.7199 10.7198L9.7502 11.6895V9H8.2502V11.6895L7.2805 10.7198C6.9875 10.4268 6.5129 10.4268 6.22 10.7198C6.0735 10.8663 6.00031 11.0577 6.00031 11.2501C6.00031 11.4425 6.0735 11.6339 6.22 11.7804L8.47 14.0304C8.763 14.3234 9.2375 14.3233 9.5304 14.0303Z"
          fill={fill}
        />
        <path
          d="M13.2501 2H4.75012C3.23352 2 2.00012 3.2334 2.00012 4.75V9H8.25012V6.31055L7.28041 7.28015C6.98741 7.57315 6.51281 7.57315 6.21991 7.28015C5.92701 6.98715 5.92691 6.51263 6.21991 6.21973L8.46991 3.96973C8.61641 3.82323 8.80831 3.75 9.00021 3.75C9.19211 3.75 9.38402 3.82323 9.53052 3.96973L11.7805 6.21973C12.0735 6.51273 12.0735 6.98725 11.7805 7.28015C11.4875 7.57305 11.0129 7.57315 10.72 7.28015L9.75032 6.31055V9H16.0003V4.75C16.0003 3.2334 14.7667 2 13.2501 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TableRowsMerge;
