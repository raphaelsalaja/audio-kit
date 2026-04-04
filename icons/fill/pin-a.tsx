import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinA({
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
        <path d="M8.17152 8.5H9.82849L9 6.01138L8.17152 8.5Z" fill={fill} />
        <path
          d="M2.25 8.25C2.25 4.52392 5.27195 1.5 9 1.5C12.7281 1.5 15.75 4.52392 15.75 8.25C15.75 10.7465 14.5289 12.9149 13.1601 14.4916C12.4711 15.2854 11.7294 15.9477 11.0501 16.4477C10.3835 16.9385 9.7341 17.3047 9.22585 17.4652C9.07886 17.5116 8.92114 17.5116 8.77415 17.4652C8.2659 17.3047 7.61652 16.9385 6.9499 16.4477C6.27063 15.9477 5.52887 15.2854 4.83989 14.4916C3.47115 12.9149 2.25 10.7465 2.25 8.25ZM7.7514 5.0131C7.8534 4.70671 8.14008 4.5 8.463 4.5H9.537C9.85993 4.5 10.1466 4.70671 10.2486 5.0131L12.0796 10.5131C12.2104 10.9061 11.9979 11.3308 11.6049 11.4616C11.2119 11.5924 10.7872 11.3799 10.6564 10.9869L10.3279 10H7.67215L7.34361 10.9869C7.21277 11.3799 6.78811 11.5924 6.3951 11.4616C6.0021 11.3308 5.78957 10.9061 5.9204 10.5131L7.7514 5.0131Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinA;
