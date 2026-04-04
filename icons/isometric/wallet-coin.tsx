import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCoin({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M20.2028 21.6221L18 20.4679V7.57487L20.9775 9.19206L21.0808 21.0023L20.2028 21.6221Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18 7.5L20.1709 8.58543C20.6791 8.83951 21.0001 9.35891 21.0001 9.92707V20.7865C21.0001 21.344 20.4134 21.7066 19.9147 21.4573L18 20.5"
          stroke={fill}
        />
        <path
          d="M14 3.5L11.5 2.5V7L14 8.5V3.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M9 6L8.93164 3.03821L7 2L4 3.5L9 6Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18 13.5V6.42705C18 5.85889 17.679 5.3395 17.1708 5.08541L10.4472 1.72361C9.78231 1.39116 9 1.87465 9 2.61803V6"
          stroke={fill}
        />
        <path d="M11.5 2.2699V7.2057" stroke={fill} />
        <path d="M14 3.5V8.49678" stroke={fill} />
        <path
          d="M18 15L14.7236 13.3618C14.3912 13.1956 14 13.4373 14 13.809V16.382C14 16.7607 14.214 17.107 14.5528 17.2764L18 19"
          stroke={fill}
        />
        <path
          d="M9.09204 3.04597L7.65353 2.32672C7.24107 2.12049 6.75667 2.11544 6.33999 2.31303L4.49222 3.18928C4.14319 3.3548 3.9207 3.70654 3.9207 4.09283L3.92067 13.5M4.0001 3.5L17.1708 10.0854C17.679 10.3395 18 10.8589 18 11.427V20.5V22.2895C18 22.8463 17.4147 23.209 16.9161 22.9611L10.5 19.7711"
          stroke={fill}
        />
        <path
          d="M5.73071 12.5322L4.04077 13.2326L6.29399 14.146L7.86211 15.912L8.68423 17.6628L8.91259 19.7638L8.30361 21.3624L9.50635 20.8752L10.4263 19.9444L10.5693 18.0029L9.64968 15.2643L7.68773 13.0367L5.73071 12.5322Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.33521 13.5603L5.11543 12.6992C5.85766 12.3435 6.58901 12.4699 7.5 13.0323C9.31031 14.1498 10.6986 16.7244 10.6009 18.7829C10.5528 19.7947 10.2552 20.4398 9.53937 20.8097L7.84441 21.6251"
          stroke={fill}
        />
        <path
          d="M8.84206 19.6306C8.74431 21.689 7.19752 22.4518 5.38721 21.3343C3.5769 20.2168 2.18859 17.6422 2.28633 15.5837C2.38408 13.5253 3.93087 12.7625 5.74118 13.88C7.5515 14.9975 8.93981 17.5721 8.84206 19.6306Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default WalletCoin;
