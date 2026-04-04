import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClosingQuotationMark({
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
          d="M15.4823 9.5C15.4092 10.9089 15.1261 11.9434 14.6924 12.7081C14.1957 13.5838 13.4672 14.1668 12.4792 14.551C12.0931 14.7011 11.9019 15.1358 12.052 15.5218C12.2021 15.9079 12.6368 16.0991 13.0228 15.949C14.2848 15.4582 15.3063 14.6662 15.9971 13.4481C16.6773 12.2488 17.001 10.6999 17.001 8.75V4.75C17.001 3.78379 16.2172 3 15.251 3H11.751C10.7848 3 10.001 3.78379 10.001 4.75V7.75C10.001 8.71621 10.7848 9.5 11.751 9.5H15.4823Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.48225 9.5C6.40922 10.9089 6.12605 11.9434 5.69235 12.7081C5.19568 13.5838 4.4672 14.1668 3.47915 14.551C3.0931 14.7011 2.90185 15.1358 3.05198 15.5218C3.20211 15.9079 3.63677 16.0991 4.02281 15.949C5.28476 15.4582 6.30628 14.6662 6.99711 13.4481C7.67733 12.2488 8.00098 10.6999 8.00098 8.75V4.75C8.00098 3.78379 7.21719 3 6.25098 3H2.75098C1.78477 3 1.00098 3.78379 1.00098 4.75V7.75C1.00098 8.71621 1.78477 9.5 2.75098 9.5H6.48225Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClosingQuotationMark;
