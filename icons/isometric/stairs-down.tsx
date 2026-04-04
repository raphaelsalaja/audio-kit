import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StairsDown({
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
          d="M2.49478 1.36388L1.69356 6.29926L7.02956 4.63279C6.17274 2.9293 4.54669 1.7136 2.66695 1.39322L2.49478 1.36388Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 23V19L14 17V13L18 11V7L21.9219 5.08984L22 17L10 23Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M5.72361 13.1382L2.55279 14.7236C2.214 14.893 2 15.2393 2 15.618V18.382C2 18.7607 2.214 19.107 2.55279 19.2764L9.32918 22.6646C9.75147 22.8757 10.2485 22.8757 10.6708 22.6646L14 21L21.1708 17.4146C21.679 17.1605 22 16.6411 22 16.0729V5.92705C22 5.35889 21.679 4.8395 21.1708 4.58541L14.4472 1.22361C14.1657 1.08284 13.8343 1.08284 13.5528 1.22361L10.5528 2.72361C10.214 2.893 10 3.23926 10 3.61803V6.69098C10 6.88037 9.893 7.0535 9.72361 7.1382L6.55279 8.72361C6.214 8.893 6 9.23926 6 9.61803V12.691C6 12.8804 5.893 13.0535 5.72361 13.1382Z"
          stroke={fill}
        />
        <path
          d="M10 22.9222V18.9999L13.7236 17.1381C13.893 17.0534 14 16.8803 14 16.6909V12.9999L17.7236 11.1381C17.893 11.0534 18 10.8803 18 10.6909V6.99994L21.7533 5.12329"
          stroke={fill}
        />
        <path d="M2 15L10 19" stroke={fill} />
        <path d="M6 13L14 17" stroke={fill} />
        <path d="M6 9L14 13" stroke={fill} />
        <path d="M10 7L18 11" stroke={fill} />
        <path d="M10 3L18 7" stroke={fill} />
      </g>
    </svg>
  );
}

export default StairsDown;
