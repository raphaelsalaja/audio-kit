import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DrawCompass2({
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
          d="M15.909 15.892L10.795 6.483C11.229 6.033 11.5 5.424 11.5 4.75C11.5 3.635 10.761 2.698 9.75 2.378V1.5C9.75 1.086 9.414 0.75 9 0.75C8.586 0.75 8.25 1.086 8.25 1.5V2.378C7.239 2.699 6.5 3.635 6.5 4.75C6.5 5.423 6.77 6.033 7.205 6.483L2.091 15.892C1.893 16.256 2.028 16.711 2.392 16.909C2.506 16.971 2.628 17 2.749 17C3.015 17 3.272 16.858 3.409 16.608L8.521 7.202C8.676 7.232 8.836 7.25 9 7.25C9.164 7.25 9.323 7.232 9.479 7.202L14.591 16.608C14.727 16.858 14.985 17 15.251 17C15.372 17 15.495 16.971 15.608 16.909C15.972 16.711 16.107 16.256 15.909 15.892Z"
          fill={fill}
        />
        <path
          d="M2.25 11.75C2.25 11.3358 2.58579 11 3 11H15C15.4142 11 15.75 11.3358 15.75 11.75C15.75 12.1642 15.4142 12.5 15 12.5H3C2.58579 12.5 2.25 12.1642 2.25 11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 9.5C9.41421 9.5 9.75 9.83579 9.75 10.25V13.25C9.75 13.6642 9.41421 14 9 14C8.58579 14 8.25 13.6642 8.25 13.25V10.25C8.25 9.83579 8.58579 9.5 9 9.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DrawCompass2;
