import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BowTie({
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
          d="M10.75 10.25C11.165 10.758 11.868 11.491 12.941 12.125C13.745 12.6 14.525 12.882 15.173 13.052C15.717 13.195 16.269 12.836 16.39 12.287C16.674 11.005 16.75 9.87801 16.75 9.00101C16.75 8.12401 16.674 6.99601 16.39 5.71501C16.268 5.16601 15.717 4.80701 15.173 4.95001C14.526 5.12001 13.746 5.40101 12.941 5.87701C11.868 6.51101 11.165 7.24401 10.75 7.75201"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.25 10.25C6.835 10.758 6.132 11.491 5.059 12.125C4.255 12.6 3.475 12.882 2.827 13.052C2.283 13.195 1.731 12.836 1.61 12.287C1.326 11.005 1.25 9.87801 1.25 9.00101C1.25 8.12401 1.326 6.99601 1.61 5.71501C1.732 5.16601 2.283 4.80701 2.827 4.95001C3.474 5.12001 4.254 5.40101 5.059 5.87701C6.132 6.51101 6.835 7.24401 7.25 7.75201"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.75 10.25C11.165 10.758 11.868 11.491 12.941 12.125C13.745 12.6 14.525 12.882 15.173 13.052C15.717 13.195 16.269 12.836 16.39 12.287C16.674 11.005 16.75 9.87801 16.75 9.00101C16.75 8.12401 16.674 6.99601 16.39 5.71501C16.268 5.16601 15.717 4.80701 15.173 4.95001C14.526 5.12001 13.746 5.40101 12.941 5.87701C11.868 6.51101 11.165 7.24401 10.75 7.75201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 10.25C6.835 10.758 6.132 11.491 5.059 12.125C4.255 12.6 3.475 12.882 2.827 13.052C2.283 13.195 1.731 12.836 1.61 12.287C1.326 11.005 1.25 9.87801 1.25 9.00101C1.25 8.12401 1.326 6.99601 1.61 5.71501C1.732 5.16601 2.283 4.80701 2.827 4.95001C3.474 5.12001 4.254 5.40101 5.059 5.87701C6.132 6.51101 6.835 7.24401 7.25 7.75201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 6.25H8.25C7.69772 6.25 7.25 6.69772 7.25 7.25V10.75C7.25 11.3023 7.69772 11.75 8.25 11.75H9.75C10.3023 11.75 10.75 11.3023 10.75 10.75V7.25C10.75 6.69772 10.3023 6.25 9.75 6.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 9H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 9H4.75"
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

export default BowTie;
