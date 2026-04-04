import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pickaxe({
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
          d="M11.681 3.56895C8.74704 1.67995 5.61404 2.05997 5.21204 2.11607C6.83204 3.33507 8.26504 4.5561 9.52404 5.7271L11.681 3.56895Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.4309 6.31897C16.3199 9.25297 15.9399 12.386 15.8839 12.7881C14.6649 11.1681 13.4439 9.73507 12.2729 8.47607L14.4309 6.31897Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.9547 3.29603L9.4119 5.839C9.2167 6.034 9.2167 6.35103 9.4119 6.54603L11.4548 8.589C11.65 8.784 11.9666 8.784 12.1619 8.589L14.7046 6.04603C14.8999 5.85103 14.8999 5.534 14.7046 5.339L12.6618 3.29603C12.4665 3.10103 12.15 3.10103 11.9547 3.29603Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M11.431 3.81897C9.25004 2.26557 7.35944 1.75 5.75004 1.75L4.96204 2.36603C6.58204 3.58503 8.01504 4.80599 9.27404 5.97699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.0229 8.72601C13.1939 9.98501 14.4149 11.418 15.6339 13.038L16.2499 12.25C16.2499 10.6406 15.7343 8.74997 14.1809 6.56897"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.182 8.81799L4.414 15.586C3.862 16.138 2.966 16.138 2.414 15.586C1.862 15.034 1.862 14.138 2.414 13.586L9.182 6.81799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7047 3.54632L9.1619 6.08907C8.96664 6.28434 8.96664 6.60092 9.1619 6.79618L11.2047 8.839C11.4 9.03426 11.7166 9.03426 11.9118 8.839L14.4546 6.29624C14.6498 6.10098 14.6498 5.78439 14.4546 5.58913L12.4118 3.54632C12.2165 3.35106 11.8999 3.35105 11.7047 3.54632Z"
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

export default Pickaxe;
