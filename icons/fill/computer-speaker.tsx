import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ComputerSpeaker({
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
          d="M14.75 2H9.25C8.009 2 7 3.009 7 4.25V13.75C7 14.991 8.009 16 9.25 16H14.75C15.991 16 17 14.991 17 13.75V4.25C17 3.009 15.991 2 14.75 2ZM12 5C12.552 5 13 5.448 13 6C13 6.552 12.552 7 12 7C11.448 7 11 6.552 11 6C11 5.448 11.448 5 12 5ZM12 12.5C10.895 12.5 10 11.604 10 10.5C10 9.396 10.895 8.5 12 8.5C13.105 8.5 14 9.396 14 10.5C14 11.604 13.105 12.5 12 12.5Z"
          fill={fill}
        />
        <path
          d="M2.74979 5C2.612 5 2.49979 5.11221 2.49979 5.25V9.75C2.49979 9.88779 2.612 10 2.74979 10H4.74979C5.164 10 5.49979 10.3358 5.49979 10.75C5.49979 11.1642 5.164 11.5 4.74979 11.5H2.74979C1.78357 11.5 0.999786 10.7162 0.999786 9.75V5.25C0.999786 4.28379 1.78357 3.5 2.74979 3.5H4.74979C5.164 3.5 5.49979 3.83579 5.49979 4.25C5.49979 4.66421 5.164 5 4.74979 5H2.74979Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5.49552 13.1968C5.53961 13.6086 5.24147 13.9783 4.82961 14.0223C4.30682 14.0783 3.88902 14.2299 3.6053 14.3653C3.46378 14.4328 3.3573 14.4954 3.28988 14.5383C3.26195 14.5561 3.23447 14.5746 3.20767 14.594C2.88168 14.8454 2.41338 14.787 2.15921 14.4623C1.90168 14.1333 1.98094 13.641 2.30951 13.3926C2.38228 13.3382 2.60461 13.1807 2.95955 13.0114C3.36424 12.8184 3.94645 12.6083 4.66996 12.5309C5.08182 12.4868 5.45144 12.7849 5.49552 13.1968Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ComputerSpeaker;
