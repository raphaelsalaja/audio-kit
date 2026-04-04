import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeClip({
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
          d="M1.75 5.64296L8.565 9.54C8.84 9.673 9.16 9.673 9.434 9.54L16.25 5.64239V5.25C16.25 4.14543 15.3546 3.25 14.25 3.25H3.75C2.64543 3.25 1.75 4.14543 1.75 5.25V5.64296Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75 5.75L8.517 9.483C8.818 9.649 9.182 9.649 9.483 9.483L16.25 5.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 9V5.25C16.25 4.146 15.355 3.25 14.25 3.25H3.75C2.645 3.25 1.75 4.146 1.75 5.25V12.75C1.75 13.854 2.645 14.75 3.75 14.75H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 14.25V12.25C14.75 11.56 14.19 11 13.5 11C12.81 11 12.25 11.56 12.25 12.25V14.75C12.25 16.131 13.369 17.25 14.75 17.25C16.131 17.25 17.25 16.131 17.25 14.75V12.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default EnvelopeClip;
