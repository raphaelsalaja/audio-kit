import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArtificialIntelligence({
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
          d="M5.57 3.5C5.268 3.5 4.99546 3.68114 4.87851 3.95958L1.30851 12.4596C1.14812 12.8415 1.32768 13.2811 1.70958 13.4415C2.09147 13.6019 2.53109 13.4223 2.69149 13.0404L3.33846 11.5H7.97954L8.62651 13.0404C8.78691 13.4223 9.22653 13.6019 9.60842 13.4415C9.99032 13.2811 10.1699 12.8415 10.0095 12.4596L6.43949 3.95958C6.32254 3.68114 6.05 3.5 5.748 3.5H5.57ZM7.34954 10L5.659 5.97492L3.96847 10H7.34954Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.75 6.5C11.3358 6.5 11 6.83579 11 7.25C11 7.66421 11.3358 8 11.75 8H13V12H11.75C11.3358 12 11 12.3358 11 12.75C11 13.1642 11.3358 13.5 11.75 13.5H16C16.4142 13.5 16.75 13.1642 16.75 12.75C16.75 12.3358 16.4142 12 16 12H14.5V7.25C14.5 6.83579 14.1642 6.5 13.75 6.5H11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.706 2.28601L14.561 1.90401L14.179 0.759006C14.055 0.389006 13.442 0.389006 13.319 0.759006L12.937 1.90401L11.792 2.28601C11.607 2.34801 11.482 2.52101 11.482 2.71601C11.482 2.91101 11.607 3.08401 11.792 3.14601L12.937 3.52801L13.319 4.67301C13.381 4.85801 13.554 4.98301 13.749 4.98301C13.944 4.98301 14.117 4.85801 14.179 4.67301L14.561 3.52801L15.706 3.14601C15.891 3.08401 16.016 2.91101 16.016 2.71601C16.016 2.52101 15.891 2.34801 15.706 2.28601Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArtificialIntelligence;
