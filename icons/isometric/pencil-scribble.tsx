import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PencilScribble({
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
        <path d="M9.5 11.5064L20.2752 6.11877" stroke={fill} />
        <path d="M8 9.00637L18.8294 3.59167" stroke={fill} />
        <path
          d="M1.7124 13.4016L3.27979 10.8096L4.86208 11.0356L5.97726 12.7988L5.43474 14.3962H2.28512L1.7124 13.4016Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19 1.50635L17 2.50635L19.5 4.50635L20 6.00635L20.5 8.50635L21.5 8.00635L22.5 5.50635L21 3.00635L19 1.50635Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.15063 11.0191C4.93411 10.3326 6.83399 12.646 5.26704 14.4936"
          stroke={fill}
        />
        <path
          d="M23 19L15.6188 22.6906C15.2177 22.8911 14.7613 22.9522 14.3217 22.8643C12.9098 22.5819 12.6542 20.6729 13.942 20.029L15.6 19.2C16.5888 18.7056 16.5888 17.2944 15.6 16.8C15.2223 16.6111 14.7782 16.6109 14.4005 16.7997L10.2162 18.8919C8.30568 19.8471 2.6145 20.3665 2.6145 17"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M19.4715 8.95349C19.9692 8.72037 20.2975 8.16853 20.336 7.35739C20.4119 5.76029 19.3355 3.76274 17.932 2.89574C17.1907 2.43782 16.587 2.40992 16.0144 2.67604"
          stroke={fill}
        />
        <path
          d="M8.43451 14.437C11.1243 13.177 7.78941 6.95343 5.04297 8.22976"
          stroke={fill}
        />
        <path
          d="M22.3361 6.35739C22.4119 4.76029 21.3356 2.76274 19.932 1.89574C19.1907 1.43782 18.5871 1.40992 18.0144 1.67604L5.28263 8.03957C5.12154 8.12009 4.98518 8.24261 4.88795 8.39421L1.98758 12.9165C1.56073 13.5821 2.03865 14.4564 2.82934 14.4564H8.21362C8.36869 14.4564 8.52164 14.4203 8.66038 14.351L21.4716 7.95349C21.9693 7.72037 22.2976 7.16853 22.3361 6.35739Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default PencilScribble;
