import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PencilEraser({
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
          d="M13 22V19L23 14V17L13 22Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12.3292 21.6646L9.55279 20.2764C9.214 20.107 9 19.7607 9 19.382V17.618C9 17.2393 9.214 16.893 9.55279 16.7236L18.3292 12.3354C18.7515 12.1243 19.2485 12.1243 19.6708 12.3354L22.4472 13.7236C22.786 13.893 23 14.2393 23 14.618V16.382C23 16.7607 22.786 17.107 22.4472 17.2764L13.6708 21.6646C13.2485 21.8757 12.7515 21.8757 12.3292 21.6646Z"
          stroke={fill}
        />
        <path d="M9 17L13 19V22" stroke={fill} />
        <path d="M13 19L23 14" stroke={fill} />
        <path d="M8.5 11.5064L19.2752 6.11877" stroke={fill} />
        <path d="M7 9.00637L17.8294 3.59167" stroke={fill} />
        <path
          d="M0.712402 13.4016L2.27979 10.8096L3.86208 11.0356L4.97726 12.7988L4.43474 14.3962H1.28512L0.712402 13.4016Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18 1.50635L16 2.50635L18.5 4.50635L19 6.00635L19.5 8.50635L20.5 8.00635L21.5 5.50635L20 3.00635L18 1.50635Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M2.15063 11.0191C3.93411 10.3326 5.83399 12.646 4.26704 14.4936"
          stroke={fill}
        />
        <path
          d="M18.4715 8.95349C18.9692 8.72037 19.2975 8.16853 19.336 7.35739C19.4119 5.76029 18.3355 3.76274 16.932 2.89574C16.1907 2.43782 15.587 2.40992 15.0144 2.67604"
          stroke={fill}
        />
        <path
          d="M7.43451 14.437C10.1243 13.177 6.78941 6.95343 4.04297 8.22976"
          stroke={fill}
        />
        <path
          d="M21.3361 6.35739C21.4119 4.76029 20.3356 2.76274 18.932 1.89574C18.1907 1.43782 17.5871 1.40992 17.0144 1.67604L4.28263 8.03957C4.12154 8.12009 3.98518 8.24261 3.88795 8.39421L0.987581 12.9165C0.560725 13.5821 1.03865 14.4564 1.82934 14.4564H7.21362C7.36869 14.4564 7.52164 14.4203 7.66038 14.351L20.4716 7.95349C20.9693 7.72037 21.2976 7.16853 21.3361 6.35739Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default PencilEraser;
