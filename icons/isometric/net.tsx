import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Net({
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
        <path d="M8 10L14 13" stroke={fill} />
        <path d="M10 19L16 16" stroke={fill} />
        <path
          d="M22 7L18 9V17L22 15V7Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M18 9V17" stroke={fill} />
        <path d="M10 5L6 7V11L10 9V5Z" fill={secondaryfill} fillOpacity=".3" />
        <path
          d="M10 17L6 19V23L10 21V17Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M2 5L5.55279 6.77639C5.83431 6.91716 6.16569 6.91716 6.44721 6.77639L10 5"
          stroke={fill}
        />
        <path
          d="M2 17L5.55279 18.7764C5.83431 18.9172 6.16569 18.9172 6.44721 18.7764L10 17"
          stroke={fill}
        />
        <path d="M6 7V11" stroke={fill} />
        <path d="M6 19V23" stroke={fill} />
        <path
          d="M14 7L17.5528 8.77639C17.8343 8.91716 18.1657 8.91716 18.4472 8.77639L22 7"
          stroke={fill}
        />
        <path
          d="M14 7.61803V14.382C14 14.7607 14.214 15.107 14.5528 15.2764L17.3292 16.6646C17.7515 16.8757 18.2485 16.8757 18.6708 16.6646L21.4472 15.2764C21.786 15.107 22 14.7607 22 14.382V7.61803C22 7.23926 21.786 6.893 21.4472 6.72361L18.6708 5.33541C18.2485 5.12426 17.7515 5.12426 17.3292 5.33541L14.5528 6.72361C14.214 6.893 14 7.23926 14 7.61803Z"
          stroke={fill}
        />
        <path
          d="M5.32918 3.33541L2.55279 4.72361C2.214 4.893 2 5.23926 2 5.61803V8.38197C2 8.76074 2.214 9.107 2.55279 9.27639L5.32918 10.6646C5.75147 10.8757 6.24853 10.8757 6.67082 10.6646L9.44721 9.27639C9.786 9.107 10 8.76074 10 8.38197V5.61803C10 5.23926 9.786 4.893 9.44721 4.72361L6.67082 3.33541C6.24853 3.12426 5.75147 3.12426 5.32918 3.33541Z"
          stroke={fill}
        />
        <path
          d="M5.32918 15.3354L2.55279 16.7236C2.214 16.893 2 17.2393 2 17.618V20.382C2 20.7607 2.214 21.107 2.55279 21.2764L5.32918 22.6646C5.75147 22.8757 6.24853 22.8757 6.67082 22.6646L9.44721 21.2764C9.786 21.107 10 20.7607 10 20.382V17.618C10 17.2393 9.786 16.893 9.44721 16.7236L6.67082 15.3354C6.24853 15.1243 5.75147 15.1243 5.32918 15.3354Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Net;
