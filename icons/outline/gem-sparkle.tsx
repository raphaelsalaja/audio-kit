import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GemSparkle({
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
          d="M15.9985 6.74999C16.011 6.97549 15.946 7.20049 15.801 7.39299L9.80801 15.349C9.40501 15.884 8.59401 15.884 8.19201 15.349L2.19901 7.39299C1.90901 7.00799 1.93901 6.47499 2.26901 6.12299L4.67301 3.56699C4.86401 3.36399 5.131 3.24899 5.411 3.24899H10.12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.05298 6.75H15.9985"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.88 3.25L6.05701 6.75L8.765 15.723"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.12 3.25L11.943 6.75L9.23499 15.723"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 3C2.164 3 2.5 2.6642 2.5 2.25C2.5 1.8358 2.164 1.5 1.75 1.5C1.336 1.5 1 1.8358 1 2.25C1 2.6642 1.336 3 1.75 3Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M16.0096 2.32031L15 1.98171L14.6628 0.963808C14.5539 0.634908 14.0128 0.634908 13.9039 0.963808L13.5667 1.98171L12.5571 2.32031C12.3938 2.37511 12.2828 2.52881 12.2828 2.70291C12.2828 2.87701 12.3938 3.03071 12.5571 3.08551L13.5667 3.42411L13.9039 4.44201C13.9584 4.60651 14.111 4.71721 14.2828 4.71721C14.4546 4.71721 14.6083 4.60541 14.6617 4.44201L14.9989 3.42411L16.0085 3.08551C16.1718 3.03071 16.2828 2.87701 16.2828 2.70291C16.2828 2.52881 16.1718 2.37511 16.0085 2.32031H16.0096Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GemSparkle;
