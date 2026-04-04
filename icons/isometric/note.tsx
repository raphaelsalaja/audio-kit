import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Note({
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
          d="M18.8944 7.94721L12 4.5V6L18 9V18.5L17.5 19.5L20 21V9.73607C20 8.97852 19.572 8.286 18.8944 7.94721Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 20L2 15V16.5L12 21.5V20Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M13.3867 22.3406L3.38672 17.3406" stroke={fill} />
        <path
          d="M3.25 4.625L1 3.5M3.25 4.625L5.5 5.75M3.25 4.625V2.375M3.25 4.625V6.875"
          stroke={fill}
          strokeLinecap="round"
        />
        <path d="M10 9L15.5 11.75" stroke={fill} strokeLinecap="round" />
        <path
          d="M10 11.25L11.5 12L12.25 12.375"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M12 6V3.61803C12 2.87465 12.7823 2.39116 13.4472 2.72361L21.1377 6.56883C21.6662 6.83308 22 7.37325 22 7.96413V20.382C22 21.1253 21.2177 21.6088 20.5528 21.2764L17.5 19.75"
          stroke={fill}
        />
        <path
          d="M8 13.9599V5.61803C8 4.87465 8.78231 4.39116 9.44721 4.72361L17.1708 8.58541C17.679 8.8395 18 9.35889 18 9.92705V18.0948C18 19.8753 16.994 21.503 15.4015 22.2993C13.8387 23.0806 12 21.9442 12 20.197V16.9271C12 16.3589 11.679 15.8395 11.1708 15.5854L7.91985 13.9599L3.44721 11.7236C2.78231 11.3912 2 11.8747 2 12.618V15.197C2 16.4285 2.71167 17.0553 3.81061 17.5505"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Note;
