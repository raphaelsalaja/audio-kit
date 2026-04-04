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
          d="M15.801 7.39299C15.946 7.20049 16.011 6.97549 15.9985 6.74999H11.8405L10.12 3.24899H5.41101C5.13101 3.24899 4.86402 3.36399 4.67302 3.56699L2.26901 6.12299C1.93901 6.47499 1.90902 7.00799 2.19902 7.39299L8.19202 15.349C8.59402 15.884 9.40501 15.884 9.80801 15.349L15.801 7.39299Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.9985 6.74999C16.011 6.97549 15.946 7.20049 15.801 7.39299L9.80801 15.349C9.40501 15.884 8.59402 15.884 8.19202 15.349L2.19902 7.39299C1.90902 7.00799 1.93901 6.47499 2.26901 6.12299L4.67302 3.56699C4.86402 3.36399 5.13101 3.24899 5.41101 3.24899H10.12"
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
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.0096 2.32028L15 1.98171L14.6628 0.963842C14.5539 0.634942 14.0128 0.634942 13.9039 0.963842L13.5667 1.98171L12.5571 2.32028C12.3938 2.3751 12.2828 2.5288 12.2828 2.70293C12.2828 2.87705 12.3938 3.03075 12.5571 3.08557L13.5667 3.42414L13.9039 4.44201C13.9584 4.60646 14.111 4.71717 14.2828 4.71717C14.4546 4.71717 14.6083 4.60538 14.6617 4.44201L14.9989 3.42414L16.0085 3.08557C16.1718 3.03075 16.2828 2.87705 16.2828 2.70293C16.2828 2.5288 16.1718 2.3751 16.0085 2.32028H16.0096Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default GemSparkle;
