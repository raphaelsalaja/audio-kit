import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookWrench({
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
          d="M15.254 13.0062C15.5389 13.0062 15.7992 13.1676 15.9259 13.4228C16.0525 13.678 16.0236 13.983 15.8513 14.2098C15.3938 14.8123 15.3375 15.1345 15.8442 15.7924C16.0186 16.0188 16.0491 16.3247 15.9229 16.5811C15.7968 16.8376 15.5358 17 15.25 17H3.9989C2.89605 17 2.00201 16.106 2.00201 15.0031C2.00201 13.9003 2.89605 13.0062 3.9989 13.0062H15.254Z"
          fill={fill}
        />
        <path
          d="M2 3.75C2 2.23079 3.23079 1 4.75 1H15.25C15.6642 1 16 1.33579 16 1.75V13.6784C15.9909 13.5909 15.9663 13.5043 15.9259 13.4228C15.7992 13.1676 15.5389 13.0062 15.254 13.0062H3.9989C2.89605 13.0062 2.00201 13.9003 2.00201 15.0031L2 3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.25 5.75C11.25 4.772 10.622 3.948 9.75 3.638V5.5C9.75 5.776 9.526 6 9.25 6H8.75C8.474 6 8.25 5.776 8.25 5.5V3.638C7.378 3.948 6.75 4.772 6.75 5.75C6.75 6.632 7.262 7.387 8 7.756V10C8 10.552 8.448 11 9 11C9.552 11 10 10.552 10 10V7.756C10.738 7.387 11.25 6.632 11.25 5.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookWrench;
