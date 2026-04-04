import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Iron({
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
          d="M16.25 16H1.75C1.336 16 1 15.664 1 15.25C1 14.836 1.336 14.5 1.75 14.5H16.25C16.664 14.5 17 14.836 17 15.25C17 15.664 16.664 16 16.25 16Z"
          fill={secondaryfill}
        />
        <path
          d="M16.921 11.915L15.875 9.82399C14.851 7.77499 12.881 6.39699 10.606 6.13599L3.238 5.27599L3.283 4.84899C3.318 4.51399 3.483 4.21299 3.747 4.00199C4.012 3.79199 4.338 3.69499 4.676 3.73799L9.504 4.32299C9.905 4.36899 10.288 4.07999 10.338 3.66899C10.388 3.25799 10.095 2.88399 9.684 2.83399L4.857 2.24899C4.121 2.15899 3.393 2.36599 2.813 2.82899C2.233 3.29199 1.87 3.95399 1.792 4.69199L1.005 12.171C0.983 12.382 1.052 12.593 1.193 12.752C1.336 12.91 1.538 13 1.751 13H16.251C16.511 13 16.752 12.865 16.889 12.644C17.026 12.423 17.037 12.147 16.921 11.915ZM6 10.5C5.448 10.5 5 10.052 5 9.49999C5 8.94799 5.448 8.49999 6 8.49999C6.552 8.49999 7 8.94799 7 9.49999C7 10.052 6.552 10.5 6 10.5ZM10 10.5C9.448 10.5 9 10.052 9 9.49999C9 8.94799 9.448 8.49999 10 8.49999C10.552 8.49999 11 8.94799 11 9.49999C11 10.052 10.552 10.5 10 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Iron;
