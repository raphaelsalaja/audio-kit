import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Wifi({
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
          d="M9 15C10.1046 15 11 14.1046 11 13C11 11.8954 10.1046 11 9 11C7.89543 11 7 11.8954 7 13C7 14.1046 7.89543 15 9 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.99999 7C7.33099 7 5.76099 7.65 4.58099 8.831C4.28799 9.124 4.28799 9.599 4.58099 9.892C4.87399 10.185 5.34899 10.185 5.64199 9.892C6.53899 8.995 7.73199 8.501 8.99999 8.501C10.268 8.501 11.461 8.995 12.358 9.892C12.504 10.038 12.696 10.112 12.888 10.112C13.08 10.112 13.272 10.039 13.418 9.892C13.711 9.599 13.711 9.124 13.418 8.831C12.238 7.65 10.668 7 8.99899 7H8.99999Z"
          fill={fill}
        />
        <path
          d="M16.248 6.002C14.312 4.066 11.738 3 9.00001 3C6.26201 3 3.68801 4.066 1.75201 6.002C1.45901 6.295 1.45901 6.77 1.75201 7.063C2.04501 7.356 2.52001 7.356 2.81301 7.063C4.46501 5.41 6.66401 4.5 9.00101 4.5C11.338 4.5 13.536 5.41 15.189 7.063C15.335 7.209 15.527 7.283 15.719 7.283C15.911 7.283 16.103 7.21 16.249 7.063C16.542 6.77 16.542 6.295 16.249 6.002H16.248Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Wifi;
