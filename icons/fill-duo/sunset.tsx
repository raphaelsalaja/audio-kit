import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sunset({
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
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 12.25C1 11.8358 1.33579 11.5 1.75 11.5H3C3.41421 11.5 3.75 11.8358 3.75 12.25C3.75 12.6642 3.41421 13 3 13H1.75C1.33579 13 1 12.6642 1 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.34236 6.59396C3.63509 6.3009 4.10996 6.30064 4.40302 6.59337L5.28702 7.47638C5.58008 7.7691 5.58034 8.24398 5.28761 8.53704C4.99488 8.83009 4.52001 8.83036 4.22695 8.53763L3.34295 7.65462C3.0499 7.36189 3.04963 6.88702 3.34236 6.59396Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.6563 6.59366C14.9492 6.88655 14.9492 7.36143 14.6563 7.65432L13.7733 8.53733C13.4804 8.83022 13.0055 8.83023 12.7127 8.53734C12.4198 8.24444 12.4198 7.76957 12.7126 7.47668L13.5956 6.59367C13.8885 6.30077 14.3634 6.30077 14.6563 6.59366Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.25 12.25C14.25 11.8358 14.5858 11.5 15 11.5H16.25C16.6642 11.5 17 11.8358 17 12.25C17 12.6642 16.6642 13 16.25 13H15C14.5858 13 14.25 12.6642 14.25 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 12.25C4.75 9.90279 6.65279 8 9 8C11.3472 8 13.25 9.90279 13.25 12.25C13.25 12.6642 12.9142 13 12.5 13H5.5C5.08579 13 4.75 12.6642 4.75 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 1.25C9.75 0.835786 9.41421 0.5 9 0.5C8.58579 0.5 8.25 0.835786 8.25 1.25V4.43934L7.53033 3.71967C7.23744 3.42678 6.76256 3.42678 6.46967 3.71967C6.17678 4.01256 6.17678 4.48744 6.46967 4.78033L8.46967 6.78033C8.76256 7.07322 9.23744 7.07322 9.53033 6.78033L11.5303 4.78033C11.8232 4.48744 11.8232 4.01256 11.5303 3.71967C11.2374 3.42678 10.7626 3.42678 10.4697 3.71967L9.75 4.43934V1.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sunset;
