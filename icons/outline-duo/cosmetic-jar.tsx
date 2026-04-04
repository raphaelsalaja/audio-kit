import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CosmeticJar({
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
          d="M15.1448 10.2717C15.8376 9.37755 16.25 8.25515 16.25 7.03644C16.25 4.11682 13.8832 1.75 10.9636 1.75C9.27483 1.75 7.77103 2.54185 6.80321 3.7745C6.62479 3.95291 6.42299 4.33258 6.91404 4.50025C6.94268 4.50008 6.97134 4.5 7.00001 4.5C8.67967 4.5 10.3071 4.78741 11.5986 5.34093C12.2404 5.61598 12.9035 6.00127 13.4389 6.54372C13.9838 7.09584 14.5 7.92847 14.5 9V10.0708C14.6957 10.7241 15.0031 10.4545 15.1448 10.2717Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.25 9C12.25 10.2426 9.8995 11.25 7 11.25C4.10051 11.25 1.75 10.2426 1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 11.5C1.75 12.743 4.101 13.75 7 13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 11.25C9.8995 11.25 12.25 10.2426 12.25 9C12.25 7.75736 9.8995 6.75 7 6.75C4.10051 6.75 1.75 7.75736 1.75 9C1.75 10.2426 4.10051 11.25 7 11.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 9V14C1.75 15.243 4.101 16.25 7 16.25C9.899 16.25 12.25 15.243 12.25 14V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2501 10.0751C15.8781 9.2111 16.25 8.1503 16.25 7C16.25 4.101 13.899 1.75 11 1.75C9.3311 1.75 7.8558 2.5358 6.8967 3.7503"
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

export default CosmeticJar;
