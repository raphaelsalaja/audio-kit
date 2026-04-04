import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MusicNoteSlash({
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
          d="M2.95607 15.0439L8.04392 9.95607C7.51105 9.66527 6.89983 9.5 6.25 9.5C4.1789 9.5 2.5 11.1788 2.5 13.25C2.5 13.8998 2.66527 14.5111 2.95607 15.0439Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M10 11.1819L4.57559 16.6064C5.07958 16.8583 5.64823 17 6.25 17C8.3211 17 10 15.3212 10 13.25V11.1819Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.2151 4.78489C12.3373 4.17011 11.5945 3.44719 11.0282 2.81299C10.6559 2.39601 10.366 2.02423 10.1704 1.75851C10.0712 1.62376 9.97315 1.48759 9.88246 1.34689C9.70335 1.06588 9.36029 0.936731 9.04031 1.02991C8.72015 1.12314 8.5 1.41655 8.5 1.75V9.49999L10 7.99999V3.91276C10.5574 4.52678 11.2796 5.22862 12.1402 5.85979L13.2151 4.78489Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MusicNoteSlash;
