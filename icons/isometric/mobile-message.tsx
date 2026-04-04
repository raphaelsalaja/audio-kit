import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileMessage({
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
          d="M23 4.5L21 5.5V11.5L23 10.5V4.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M21 19.5L13 23.5V20.5L21 16.5V19.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M13 20.2938V23.2938" stroke={fill} />
        <path
          d="M13 7.49993V2.11803C13 1.73926 13.214 1.393 13.5528 1.22361L14.5528 0.723607C14.8343 0.582843 15.1657 0.582843 15.4472 0.723607L22.4472 4.22361C22.786 4.393 23 4.73926 23 5.11803V9.88199C23 10.2608 22.786 10.607 22.4472 10.7764L21.6708 11.1646C21.2485 11.3758 20.7515 11.3758 20.3292 11.1646L16 9.00002L14.2301 10.4748C13.7416 10.8819 13 10.5345 13 9.89867V7.49993Z"
          stroke={fill}
        />
        <path d="M20.9999 11.5L21 5.5L13 1.5" stroke={fill} />
        <path d="M21 5.5L23 4.5" stroke={fill} />
        <path d="M1 14.5L13 20.5L21 16.5" stroke={fill} />
        <path d="M8.5 12.75L6 14" stroke={fill} strokeLinecap="round" />
        <path
          d="M8.32918 10.8354L1.55279 14.2236C1.214 14.393 1 14.7393 1 15.118V16.882C1 17.2607 1.214 17.607 1.55279 17.7764L12.3292 23.1646C12.7515 23.3757 13.2485 23.3757 13.6708 23.1646L20.4472 19.7764C20.786 19.607 21 19.2607 21 18.882V17.118C21 16.7393 20.786 16.393 20.4472 16.2236L9.67082 10.8354C9.24853 10.6243 8.75147 10.6243 8.32918 10.8354Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default MobileMessage;
