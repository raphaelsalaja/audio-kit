import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingMedicine({
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
          d="M11.1359 5.90615L9.33243 5.42946C8.19779 5.12955 7.52112 3.96662 7.82103 2.83198C8.12094 1.69734 9.28387 1.02066 10.4185 1.32057L12.2526 1.80537L11.1359 5.90615Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M0 10.25C0 9.69772 0.447715 9.25 1 9.25H2C2.55228 9.25 3 9.69772 3 10.25V15.25C3 15.8023 2.55228 16.25 2 16.25H1C0.447715 16.25 0 15.8023 0 15.25V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.437 12.465L15.254 10.291C15.966 9.97 16.803 10.286 17.125 10.998C17.446 11.71 17.13 12.547 16.418 12.869L9.627 15.934C8.951 16.239 8.186 16.283 7.479 16.057L3.001 14.625"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.245 11.598L9.216 12.492C9.927 12.815 10.765 12.5 11.088 11.789C11.411 11.078 11.096 10.24 10.385 9.917L7.608 8.649C5.312 7.626 3.375 9.188 3 11.001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.25H2C2.552 9.25 3 9.698 3 10.25V15.25C3 15.802 2.552 16.25 2 16.25H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.33243 5.42946L12.9579 6.38776C14.0926 6.68767 15.2555 6.01099 15.5554 4.87635C15.8553 3.74172 15.1786 2.57878 14.044 2.27887L10.4185 1.32057C9.28387 1.02066 8.12094 1.69734 7.82102 2.83198C7.52111 3.96662 8.19779 5.12955 9.33243 5.42946Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.231 1.8L11.145 5.909"
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

export default HandHoldingMedicine;
