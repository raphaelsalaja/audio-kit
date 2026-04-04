import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WalletCard({
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
          d="M20.2028 21.6221L18.0005 20.4697V7.61316L20.9775 9.19208L21.0808 21.0023L20.2028 21.6221Z"
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
          d="M9.09204 3.04597L7.65353 2.32672C7.24107 2.12049 6.75667 2.11544 6.33999 2.31303L4.49222 3.18928C4.14319 3.3548 3.9207 3.70654 3.9207 4.09283L3.92066 15.5706C3.92066 16.14 4.24303 16.6603 4.75287 16.9138L16.9161 22.9611C17.4147 23.209 18 22.8463 18 22.2895V20.5V11.427C18 10.8589 17.679 10.3395 17.1708 10.0854L4.0001 3.5"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default WalletCard;
