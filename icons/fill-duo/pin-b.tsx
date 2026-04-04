import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinB({
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
          d="M2.25 7.75C2.25 4.02392 5.27195 1 9 1C12.7281 1 15.75 4.02392 15.75 7.75C15.75 10.2465 14.5289 12.4149 13.1601 13.9916C12.4711 14.7854 11.7294 15.4477 11.0501 15.9477C10.3835 16.4385 9.7341 16.8047 9.22585 16.9652C9.07886 17.0116 8.92114 17.0116 8.77415 16.9652C8.2659 16.8047 7.61652 16.4385 6.9499 15.9477C6.27063 15.4477 5.52887 14.7854 4.83989 13.9916C3.47115 12.4149 2.25 10.2465 2.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.486 5.24945C6.4863 4.83545 6.82199 4.5 7.23599 4.5H9.64102C10.8142 4.5 11.766 5.45179 11.766 6.625C11.766 7.08686 11.6185 7.51441 11.368 7.86307C11.7589 8.24907 12.0008 8.78541 12 9.378C11.9985 10.551 11.0477 11.5 9.875 11.5H7.23199C7.03299 11.5 6.84214 11.4209 6.70147 11.2801C6.5608 11.1394 6.48185 10.9485 6.48199 10.7495C6.48333 8.91573 6.48466 7.08292 6.486 5.24945ZM7.98345 8.75L7.98254 10H9.875C10.2203 10 10.4996 9.72105 10.5 9.37602C10.5005 9.03048 10.2203 8.75 9.875 8.75H7.98345ZM9.64102 7.25H7.98454L7.98545 6H9.64102C9.98579 6 10.266 6.28021 10.266 6.625C10.266 6.96979 9.98579 7.25 9.64102 7.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinB;
