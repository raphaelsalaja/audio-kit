import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pencil({
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
        <path d="M9.5 15.5064L20.2752 10.1188" stroke={fill} />
        <path d="M8 13.0064L18.8294 7.59167" stroke={fill} />
        <path
          d="M1.7124 17.4016L3.27979 14.8096L4.86208 15.0356L5.97726 16.7988L5.43474 18.3962H2.28512L1.7124 17.4016Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M19 5.50635L17 6.50635L19.5 8.50635L20 10.0063L20.5 12.5063L21.5 12.0063L22.5 9.50635L21 7.00635L19 5.50635Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M3.15063 15.0191C4.93411 14.3326 6.83399 16.646 5.26704 18.4936"
          stroke={fill}
        />
        <path
          d="M19.4715 12.9535C19.9692 12.7204 20.2975 12.1685 20.336 11.3574C20.4119 9.76029 19.3355 7.76274 17.932 6.89574C17.1907 6.43782 16.587 6.40992 16.0144 6.67604"
          stroke={fill}
        />
        <path
          d="M8.43451 18.437C11.1243 17.177 7.78941 10.9534 5.04297 12.2298"
          stroke={fill}
        />
        <path
          d="M22.3361 10.3574C22.4119 8.76029 21.3356 6.76274 19.932 5.89574C19.1907 5.43782 18.5871 5.40992 18.0144 5.67604L5.28263 12.0396C5.12154 12.1201 4.98518 12.2426 4.88795 12.3942L1.98758 16.9165C1.56073 17.5821 2.03865 18.4564 2.82934 18.4564H8.21362C8.36869 18.4564 8.52164 18.4203 8.66038 18.351L21.4716 11.9535C21.9693 11.7204 22.2976 11.1685 22.3361 10.3574Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Pencil;
