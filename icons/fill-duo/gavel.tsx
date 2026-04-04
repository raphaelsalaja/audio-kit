import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gavel({
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
          d="M1 15.75C1 15.3358 1.33579 15 1.75 15H8.25C8.66421 15 9 15.3358 9 15.75C9 16.1642 8.66421 16.5 8.25 16.5H1.75C1.33579 16.5 1 16.1642 1 15.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M8.16296 9.66501L13.3549 14.8599C13.9069 15.4119 14.8029 15.4119 15.3549 14.8599C15.9069 14.3079 15.9069 13.4119 15.3549 12.8599L10.16 7.66699"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.38361 1.22666C8.6765 0.933765 9.15138 0.933765 9.44427 1.22666L9.9412 1.72359C9.94223 1.72461 9.94326 1.72563 9.94429 1.72666C9.94531 1.72768 9.94634 1.72871 9.94735 1.72974L13.0157 4.79806C13.0183 4.80058 13.0208 4.80311 13.0234 4.80567C13.0259 4.80823 13.0285 4.8108 13.031 4.81338L13.5233 5.30566C13.8162 5.59855 13.8162 6.07343 13.5233 6.36632C13.2406 6.64901 12.7884 6.65886 12.4939 6.39586L6.89581 11.9939C7.15883 12.2884 7.14898 12.7406 6.86629 13.0233C6.57339 13.3162 6.09852 13.3162 5.80563 13.0233L2.22663 9.44432L1.72663 8.94433C1.43373 8.65144 1.43373 8.17656 1.72663 7.88367C2.00934 7.60096 2.4616 7.59113 2.7561 7.85419L8.35414 2.25614C8.09107 1.96165 8.10089 1.50938 8.38361 1.22666Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Gavel;
